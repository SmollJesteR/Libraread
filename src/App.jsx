import { useState } from 'react';
import SearchForm from './components/SearchForm';
import ResultsTable from './components/ResultsTable';
import BookDetail from './components/BookDetail';
import ReadingList from './components/ReadingList';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TestimonialsSection from './components/TestimonialsSection';
import useLocalStorage from './hooks/useLocalStorage';
/**
 * Main App Component - LibraRead
 */
export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [readingList, setReadingList] = useLocalStorage('libraread:readingList', []);

  /**
   * Fetch books dari Open Library API
   * @param {Object} formData - Form search data
   */
  const searchBooks = async (formData) => {
    setLoading(true);
    setError(null);
    setSearchResults([]);

    try {
      // Build query string
      const queryParts = [];
      
      if (formData.query) queryParts.push(`title=${encodeURIComponent(formData.query)}`);
      if (formData.author) queryParts.push(`author=${encodeURIComponent(formData.author)}`);
      if (formData.subject) queryParts.push(`subject=${encodeURIComponent(formData.subject)}`);
      
      const queryString = queryParts.join('&');
      const url = `https://openlibrary.org/search.json?${queryString}&limit=${formData.limit}`;

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }

      const data = await response.json();
      
      // Filter by year if specified
      let results = data.docs || [];
      if (formData.year) {
        results = results.filter(book => 
          book.first_publish_year === parseInt(formData.year)
        );
      }

      setSearchResults(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Tambah buku ke reading list
   * @param {Object} book - Book object
   */
  const addToReadingList = (book) => {
    const exists = readingList.some(item => item.key === book.key);
    
    if (exists) {
      alert('This book is already in your reading list!');
      return;
    }

    setReadingList(prev => [...prev, book]);
    alert(`"${book.title}" added to your reading list!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-light to-white">
      <Navbar />
      <HeroSection />
      <main className="grid grid-cols-1 lg:grid-cols-[1fr,350px] gap-6 p-8 max-w-[1600px] mx-auto">
        <div className="space-y-6">
          <SearchForm onSearch={searchBooks} loading={loading} />

          {error && (
            <div className="error-message" role="alert">
              <strong>Error:</strong> {error}
            </div>
          )}

          {loading && (
            <div className="loading-message">
              <div className="spinner"></div>
              <p>Searching books...</p>
            </div>
          )}

          {!loading && searchResults.length > 0 && (
            <div className="results-section">
              <h2>Search Results ({searchResults.length})</h2>
              <ResultsTable 
                data={searchResults} 
                onSelect={setSelectedBook}
                onAddToList={addToReadingList}
              />
            </div>
          )}
        </div>

        <ReadingList onOpenDetail={setSelectedBook} />
      </main>

      {selectedBook && (
        <BookDetail book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
      <TestimonialsSection />
    </div>
  );
}