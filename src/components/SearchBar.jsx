import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 rounded-l-md text-black bg-gray-400 dark:bg-gray-600 dark:text-white border-gray-600 placeholder:text-white"
        placeholder="Search for news..."
      />
      <button type="submit" className="p-2 bg-buttons-color text-white rounded-r-md">Search</button>
    </form>
  );
};

export default SearchBar;
