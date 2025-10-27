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
    <aside className="reading-list" aria-label="Your reading list">
      <h3>📖 Reading List ({list.length})</h3>
      
      {list.length > 0 && (
        <>
          <input
            type="text"
            className="filter-input"
            placeholder="Filter your list..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          
          <button onClick={clearAll} className="btn-clear-all">
            Clear All
          </button>
        </>
      )}

      {list.length === 0 ? (
        <p className="empty-list">No books saved yet. Start adding books from search results!</p>
      ) : (
        <ul className="reading-list-items">
          {filteredList.map((book) => (
            <li key={book.key} className="list-item">
              <button 
                className="list-title" 
                onClick={() => onOpenDetail(book)}
                title="View details"
              >
                <strong>{book.title}</strong>
                <span className="list-author">{book.author_name?.[0]}</span>
              </button>
              <button 
                className="remove" 
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
        <p className="no-results">No books match your filter.</p>
      )}
    </aside>
  );
}