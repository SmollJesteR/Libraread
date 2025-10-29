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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 animate-fadeIn" onClick={onClose}>
      <div className="bg-white p-8 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-slideUp" 
        onClick={(e) => e.stopPropagation()}>
        <button 
          className="absolute right-4 top-4 w-10 h-10 bg-green-light text-green-dark text-2xl rounded-full flex items-center justify-center hover:bg-green hover:text-white transform hover:rotate-90 transition-all"
          onClick={onClose} 
          aria-label="Close"
        >
          ×
        </button>
        
        <div className="flex flex-col md:flex-row gap-6 pb-6 mb-6 border-b-2 border-green-light">
          {book.cover_i && (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={`Cover of ${book.title}`}
              className="w-32 h-auto rounded-lg shadow-md"
            />
          )}
          <div>
            <h2 className="text-2xl text-green font-semibold mb-2">{book.title}</h2>
            <p className="text-gray-600 text-lg mb-1">by {book.author_name?.[0] || 'Unknown'}</p>
            <p className="text-gray-500 text-sm">First Published: {book.first_publish_year || '—'}</p>
          </div>
        </div>

        {loading && <p className="text-center text-gray-600 p-4">Loading details...</p>}
        
        {error && <p className="text-red-600 p-4">Error: {error}</p>}
        
        {!loading && detail && (
          <>
            <section className="mb-6">
              <h3 className="text-xl text-green font-semibold mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{getDescription()}</p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl text-green font-semibold mb-3">Subjects</h3>
              <div className="flex flex-wrap gap-2">
                {detail.subjects?.slice(0, 15).map((subject, idx) => (
                  <span 
                    key={idx} 
                    className="bg-green-light text-green-dark px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    {subject}
                  </span>
                )) || <p className="text-gray-500">No subjects available</p>}
              </div>
            </section>

            {detail.publishers && (
              <section className="mb-6">
                <h3 className="text-xl text-green font-semibold mb-3">Publishers</h3>
                <p className="text-gray-700">{detail.publishers.join(', ')}</p>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
}