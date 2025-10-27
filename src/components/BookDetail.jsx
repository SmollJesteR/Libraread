import { useEffect, useState } from 'react';

/**
 * Modal untuk menampilkan detail buku
 * @param {Object} book - Book object
 * @param {Function} onClose - Callback untuk menutup modal
 */
export default function BookDetail({ book, onClose }) {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    
    async function loadDetail() {
      setLoading(true);
      setError(null);
      
      try {
        const workKey = book.key;
        const response = await fetch(`https://openlibrary.org${workKey}.json`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        
        const json = await response.json();
        if (mounted) {
          setDetail(json);
        }
      } catch (err) {
        if (mounted) {
          setError(err.message);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }
    
    loadDetail();
    
    return () => {
      mounted = false;
    };
  }, [book]);

  const getDescription = () => {
    if (!detail?.description) return 'No description available.';
    return typeof detail.description === 'string' 
      ? detail.description 
      : detail.description.value;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close">×</button>
        
        <div className="modal-header">
          {book.cover_i && (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={`Cover of ${book.title}`}
              className="modal-cover"
            />
          )}
          <div>
            <h2>{book.title}</h2>
            <p className="modal-author">by {book.author_name?.[0] || 'Unknown'}</p>
            <p className="modal-year">First Published: {book.first_publish_year || '—'}</p>
          </div>
        </div>

        {loading && <p className="loading">Loading details...</p>}
        
        {error && <p className="error">Error: {error}</p>}
        
        {!loading && detail && (
          <>
            <section className="modal-section">
              <h3>Description</h3>
              <p>{getDescription()}</p>
            </section>

            <section className="modal-section">
              <h3>Subjects</h3>
              <div className="subjects-grid">
                {detail.subjects?.slice(0, 15).map((subject, idx) => (
                  <span key={idx} className="subject-tag">{subject}</span>
                )) || <p>No subjects available</p>}
              </div>
            </section>

            {detail.publishers && (
              <section className="modal-section">
                <h3>Publishers</h3>
                <p>{detail.publishers.join(', ')}</p>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
}