import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ReadingList({ onOpen }) {
  const [list, setList] = useLocalStorage("libra:readingList", []);

  const remove = (key) => {
    setList(prev => prev.filter(item => item.key !== key));
  };

  return (
    <aside className="reading-list" aria-label="Your reading list">
      <h3>Reading List</h3>
      {list.length === 0 ? <p>No saved books.</p> : (
        <ul>
          {list.map(item => (
            <li key={item.key}>
              <button className="list-title" onClick={() => onOpen(item)}>{item.title}</button>
              <button className="remove" onClick={() => remove(item.key)} aria-label={`Remove ${item.title}`}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
