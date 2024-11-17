import { useState } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className={`blog-header ${darkMode ? 'dark-mode' : ''}`}>
      <h1>My Awesome Blog</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
