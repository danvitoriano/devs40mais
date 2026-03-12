export default function Event() {
  return (
    <section id="evento" className="event">
      <div className="event-content">
        <span className="event-badge">
          <i className="fas fa-calendar-alt"></i> Próximo Evento
        </span>
        <h2>Meetup Woman &amp; Queer Tech</h2>
        <p className="event-desc">
          Uma reunião de três comunidades — <strong>Elas Programam</strong>, <strong>Devs 40+</strong> e{' '}
          <strong>Orgulho Tech</strong> — para discutir interseccionalidade na tecnologia e unir aliados
          em torno de causas comuns durante o Mês Internacional das Mulheres.
        </p>
        <div className="event-details">
          <div className="event-detail-item">
            <i className="fas fa-calendar"></i>
            <span>19 de março de 2026 · 19h–21h</span>
          </div>
          <div className="event-detail-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Blip · Av. Brigadeiro Faria Lima, 4221 — Vila Olímpia, São Paulo</span>
          </div>
          <div className="event-detail-item">
            <i className="fas fa-microphone"></i>
            <span>Palestrantes: Silvia Coelho, Dan Vitoriano e Rafa Mores + microfone aberto</span>
          </div>
        </div>
        <a
          href="https://www.meetup.com/orgulhotech"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button cta-button-event"
        >
          <i className="fas fa-ticket-alt"></i> Garantir minha vaga
        </a>
      </div>
    </section>
  )
}
