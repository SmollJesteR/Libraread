import React, { useEffect, useState } from "react";

export default function BookDetail({ book, onClose }) {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      try {
        // book.key typically like "/works/OLxxxxxW"
        const workKey = book.key;
        const url = `https://openlibrary.org${workKey}.json`;
        const res = await fetch(url);
        const json = await res.json();
        if (mounted) setDetail(json);
      } catch {
        if (mounted) setDetail(null);
      } finally { if (mounted) setLoading(false); }
    }
    load();
    return () => { mounted = false; };
  }, [book]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <button className="close-btn" onClick={onClose} aria-label="Close">×</button>
        <h2>{book.title}</h2>
        <p><strong>Author:</strong> {book.author_name}</p>
        <p><strong>First Published:</strong> {book.first_publish_year || "—"}</p>

        {loading && <p>Loading details…</p>}
        {!loading && detail && (
          <>
            <section>
              <h3>Description</h3>
              <p>{detail.description ? (typeof detail.description === "string" ? detail.description : detail.description.value) : "No description."}</p>
            </section>
            <section>
              <h3>Subjects</h3>
              <ul>
                {detail.subjects ? detail.subjects.slice(0,10).map(s => <li key={s}>{s}</li>) : <li>—</li>}
              </ul>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
