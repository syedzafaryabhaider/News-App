import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import news from '../assets/news.svg'
import light from '../assets/light.svg'
import moon from '../assets/moon.svg'

const Header = ({ toggleDarkMode, darkMode, setQuery }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setQuery('');
    navigate('/');
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    navigate('/'); // Navigate to HomePage
  };

  return (
    <header className="p-4 flex justify-between items-center">
      <img src={news} className="h-14 cursor-pointer" onClick={handleHomeClick}/>
      <nav className="p-2 bg-buttons-color shadow-2xl shadow-violet-950 dark:shadow-violet-400 rounded-3xl space-x-4">
        <Link to="/" className="hover:text-indigo-900 mx-2" onClick={handleHomeClick}>Home</Link>
        <Link to="/category/business" className="hover:text-indigo-900 mx-2">Business</Link>
        <Link to="/category/entertainment" className="hover:text-indigo-900 mx-2">Entertainment</Link>
        <Link to="/category/health" className="hover:text-indigo-900 mx-2">Health</Link>
        <Link to="/category/science" className="hover:text-indigo-900 mx-2">Science</Link>
        <Link to="/category/sports" className="hover:text-indigo-900 mx-2">Sports</Link>
        <Link to="/category/technology" className="hover:text-indigo-900 mx-2">Technology</Link>
      </nav>
      <div className="flex items-center">
        <SearchBar onSearch={handleSearch} />
        <button onClick={toggleDarkMode} className="ml-4">
          {darkMode ? <img src={moon}/> : <img src={light}/>}
        </button>
      </div>
    </header>
  );
};

export default Header;
