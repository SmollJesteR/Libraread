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
    <form className="bg-white p-6 rounded-xl shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl text-green font-semibold mb-4">Search Books</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-green-dark">Title</span>
          <input
            type="text"
            name="query"
            value={formData.query}
            onChange={handleChange}
            placeholder="Enter book title"
            minLength="2"
            className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-green focus:outline-none focus:ring-2 focus:ring-green/20 transition-all"
          />
        </label>
        
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-green-dark">Author</span>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-green focus:outline-none focus:ring-2 focus:ring-green/20 transition-all"
          />
        </label>
      </div>

      {errors.query && <span className="text-red-600 text-sm block mb-4">{errors.query}</span>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-green-dark">Subject/Category</span>
          <select 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange}
            className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-green focus:outline-none focus:ring-2 focus:ring-green/20 transition-all"
          >
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

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-green-dark">Year</span>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="e.g., 2020"
            min="1000"
            max={new Date().getFullYear()}
            className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-green focus:outline-none focus:ring-2 focus:ring-green/20 transition-all"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-green-dark">Results Limit</span>
          <select 
            name="limit" 
            value={formData.limit} 
            onChange={handleChange} 
            required
            className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-green focus:outline-none focus:ring-2 focus:ring-green/20 transition-all"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </label>
      </div>

      {errors.year && <span className="text-red-600 text-sm block mb-4">{errors.year}</span>}

      <button 
        type="submit" 
        disabled={loading}
        className="w-full py-3 px-4 bg-green text-white font-semibold rounded-lg hover:bg-green-dark transform hover:-translate-y-0.5 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? 'Searching...' : 'Search Books'}
      </button>
    </form>
  );
}