import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

/**
 * Sidebar untuk reading list dengan filter
 * @param {Function} onOpenDetail - Callback untuk membuka detail buku
 */
export default function ReadingList({ onOpenDetail }) {
  const [list, setList] = useLocalStorage('libraread:readingList', []);
  const [filter, setFilter] = useState('');

  const removeBook = (key) => {
    setList(prev => prev.filter(item => item.key !== key));
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear your entire reading list?')) {
      setList([]);
    }
  };

  const filteredList = filter 
    ? list.filter(book => 
        book.title.toLowerCase().includes(filter.toLowerCase()) ||
        book.author_name?.[0]?.toLowerCase().includes(filter.toLowerCase())
      )
    : list;

  return (
    <aside className="bg-white p-6 rounded-xl shadow-md sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto" aria-label="Your reading list">
      <h3 className="text-xl text-green font-semibold mb-4">📖 Reading List ({list.length})</h3>
      
      {list.length > 0 && (
        <>
          <input
            type="text"
            className="w-full px-3 py-2 mb-3 border-2 border-gray-200 rounded-lg focus:border-green focus:outline-none focus:ring-2 focus:ring-green/20 transition-all"
            placeholder="Filter your list..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          
          <button 
            onClick={clearAll} 
            className="w-full mb-4 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Clear All
          </button>
        </>
      )}

      {list.length === 0 ? (
        <p className="text-gray-500 italic text-center py-4">No books saved yet. Start adding books from search results!</p>
      ) : (
        <ul className="space-y-3">
          {filteredList.map((book) => (
            <li key={book.key} className="bg-green-light rounded-lg p-3 group hover:bg-green transition-colors">
              <button 
                className="flex-1 w-full text-left group-hover:text-white" 
                onClick={() => onOpenDetail(book)}
                title="View details"
              >
                <strong className="block text-green-dark group-hover:text-white">{book.title}</strong>
                <span className="text-sm text-gray-600 group-hover:text-white/80">{book.author_name?.[0]}</span>
              </button>
              <button 
                className="absolute right-2 top-2 text-red-600 group-hover:text-white px-2 py-1 rounded hover:bg-red-600/20 transition-colors"
                onClick={() => removeBook(book.key)}
                aria-label={`Remove ${book.title}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
      
      {filter && filteredList.length === 0 && (
        <p className="text-gray-500 italic text-center py-4">No books match your filter.</p>
      )}
    </aside>
  );
}