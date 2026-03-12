export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src="/img/logo.png" alt="DEVS 40+ Logo" className="hero-logo" />
        <h1>COMUNIDADE TECH 40+</h1>
        <p>Conectando desenvolvedores experientes e compartilhando conhecimento</p>
        <div className="hero-buttons">
          <a
            href="https://chat.whatsapp.com/KAVfzF6Bx6r26TSNfye2Zi"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-button-whatsapp"
          >
            <i className="fab fa-whatsapp"></i> Junte-se ao Grupo WhatsApp
          </a>
          <a href="#contato" className="cta-button">Entre em Contato</a>
        </div>
      </div>
    </section>
  )
}
