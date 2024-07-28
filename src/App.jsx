import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import Header from './components/Header';
import './App.css';
import './index.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <Router>
      <div className="App bg-light-background dark:bg-dark-background min-h-screen">
        <Header
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          setQuery={setQuery}
        />
        <Routes>
          <Route path="/" element={<HomePage query={query} />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
