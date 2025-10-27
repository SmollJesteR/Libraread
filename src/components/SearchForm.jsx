import { useState } from 'react';

/**
 * Form pencarian buku dengan validasi
 * @param {Function} onSearch - Callback untuk submit search
 * @param {boolean} loading - Status loading
 */
export default function SearchForm({ onSearch, loading }) {
  const [formData, setFormData] = useState({
    query: '',
    author: '',
    subject: '',
    year: '',
    limit: '10'
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error saat user mengetik
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.query.trim() && !formData.author.trim() && !formData.subject.trim()) {
      newErrors.query = 'Please enter at least title, author, or subject';
    }
    
    if (formData.year && (formData.year < 1000 || formData.year > new Date().getFullYear())) {
      newErrors.year = 'Please enter a valid year';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSearch(formData);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>Search Books</h2>
      
      <div className="form-row">
        <label>
          Title
          <input
            type="text"
            name="query"
            value={formData.query}
            onChange={handleChange}
            placeholder="Enter book title"
            minLength="2"
          />
        </label>
        
        <label>
          Author
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
          />
        </label>
      </div>

      {errors.query && <span className="error">{errors.query}</span>}

      <div className="form-row">
        <label>
          Subject/Category
          <select name="subject" value={formData.subject} onChange={handleChange}>
            <option value="">All Subjects</option>
            <option value="fiction">Fiction</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="biography">Biography</option>
            <option value="romance">Romance</option>
            <option value="fantasy">Fantasy</option>
            <option value="mystery">Mystery</option>
            <option value="technology">Technology</option>
          </select>
        </label>

        <label>
          Year
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="e.g., 2020"
            min="1000"
            max={new Date().getFullYear()}
          />
        </label>

        <label>
          Results Limit
          <select name="limit" value={formData.limit} onChange={handleChange} required>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </label>
      </div>

      {errors.year && <span className="error">{errors.year}</span>}

      <button type="submit" disabled={loading}>
        {loading ? 'Searching...' : 'Search Books'}
      </button>
    </form>
  );
}