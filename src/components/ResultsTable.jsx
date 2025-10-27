import React from "react";

export default function ResultsTable({ data = [], onSelect }) {
  return (
    <table className="results-table" aria-live="polite">
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
        {data.length === 0 && (
          <tr><td colSpan="5" className="no-data">No results</td></tr>
        )}
        {data.map((item) => (
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
                <div className="cover-placeholder" aria-hidden>—</div>
              )}
            </td>
            <td>{item.title}</td>
            <td>{item.author_name}</td>
            <td>{item.first_publish_year || "—"}</td>
            <td>
              <button onClick={() => onSelect(item)}>Detail</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
