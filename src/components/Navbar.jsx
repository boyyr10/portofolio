export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">
          rama<span>.</span>dev
        </div>
        <div className="nav-links">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#experience">experience</a>
          <a href="#contact">contact</a>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '◑' : '◐'}
          </button>
        </div>
      </div>
    </nav>
  )
}
