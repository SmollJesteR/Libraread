/**
 * Tabel hasil pencarian buku
 * @param {Array} data - Array of book objects
 * @param {Function} onSelect - Callback untuk melihat detail
 * @param {Function} onAddToList - Callback untuk menambah ke reading list
 */
export default function ResultsTable({ data = [], onSelect, onAddToList }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white" role="table">
        <thead>
          <tr>
            <th className="bg-green-light text-green-dark p-4 text-left font-semibold border-b-2 border-green">Cover</th>
            <th className="bg-green-light text-green-dark p-4 text-left font-semibold border-b-2 border-green">Title</th>
            <th className="bg-green-light text-green-dark p-4 text-left font-semibold border-b-2 border-green">Author</th>
            <th className="bg-green-light text-green-dark p-4 text-left font-semibold border-b-2 border-green">Year</th>
            <th className="bg-green-light text-green-dark p-4 text-left font-semibold border-b-2 border-green">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-8 text-gray-500 italic">No results found</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.key} className="hover:bg-green-light transition-colors">
                <td className="p-4 border-b border-gray-200">
                  {item.cover_i ? (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${item.cover_i}-S.jpg`}
                      alt={`Cover of ${item.title}`}
                      className="w-12 h-auto rounded shadow-sm"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-12 h-16 bg-green-light flex items-center justify-center rounded text-2xl" aria-hidden="true">
                      📚
                    </div>
                  )}
                </td>
                <td className="p-4 border-b border-gray-200 font-semibold">{item.title}</td>
                <td className="p-4 border-b border-gray-200">{item.author_name?.[0] || '—'}</td>
                <td className="p-4 border-b border-gray-200">{item.first_publish_year || '—'}</td>
                <td className="p-4 border-b border-gray-200">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => onSelect(item)}
                      className="px-4 py-2 bg-green text-white font-semibold rounded hover:bg-green-dark transition-colors"
                      title="View details"
                    >
                      Detail
                    </button>
                    <button 
                      onClick={() => onAddToList(item)}
                      className="px-4 py-2 bg-green-light text-green-dark font-semibold rounded border-2 border-green hover:bg-green hover:text-white transition-colors"
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