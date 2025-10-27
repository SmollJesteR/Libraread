/**
 * Tabel hasil pencarian buku
 * @param {Array} data - Array of book objects
 * @param {Function} onSelect - Callback untuk melihat detail
 * @param {Function} onAddToList - Callback untuk menambah ke reading list
 */
export default function ResultsTable({ data = [], onSelect, onAddToList }) {
  return (
    <div className="table-container">
      <table className="results-table" role="table">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" className="no-data">No results found</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.key}>
                <td>
                  {item.cover_i ? (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${item.cover_i}-S.jpg`}
                      alt={`Cover of ${item.title}`}
                      className="cover-thumb"
                      loading="lazy"
                    />
                  ) : (
                    <div className="cover-placeholder" aria-hidden="true">📚</div>
                  )}
                </td>
                <td><strong>{item.title}</strong></td>
                <td>{item.author_name?.[0] || '—'}</td>
                <td>{item.first_publish_year || '—'}</td>
                <td>
                  <div className="action-buttons">
                    <button 
                      onClick={() => onSelect(item)}
                      className="btn-detail"
                      title="View details"
                    >
                      Detail
                    </button>
                    <button 
                      onClick={() => onAddToList(item)}
                      className="btn-add"
                      title="Add to reading list"
                    >
                      + List
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}