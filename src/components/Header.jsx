import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header>
      <nav>
        <NavLink to="/" className="logo">DEVS 40+</NavLink>
        <button
          className="menu-toggle"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          <li><NavLink to="/" onClick={handleLinkClick}>Início</NavLink></li>
          <li><NavLink to="/evento" onClick={handleLinkClick}>Evento</NavLink></li>
          <li><NavLink to="/sobre" onClick={handleLinkClick}>Sobre</NavLink></li>
          <li><NavLink to="/retrospectiva" onClick={handleLinkClick}>Retrospectiva 2023</NavLink></li>
          <li><NavLink to="/podcast" onClick={handleLinkClick}>Podcast</NavLink></li>
          <li><NavLink to="/contato" onClick={handleLinkClick}>Contato</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
