import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header>
      <nav>
        <a href="#home" className="logo">DEVS 40+</a>
        <button
          className="menu-toggle"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          <li><a href="#home" onClick={handleLinkClick}>Início</a></li>
          <li><a href="#sobre" onClick={handleLinkClick}>Sobre</a></li>
          <li><a href="#retrospectiva" onClick={handleLinkClick}>Retrospectiva 2023</a></li>
          <li><a href="#podcast" onClick={handleLinkClick}>Podcast</a></li>
          <li><a href="#contato" onClick={handleLinkClick}>Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}
