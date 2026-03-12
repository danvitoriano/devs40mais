import features from '../data/features'

export default function Features() {
  return (
    <section className="features">
      <h2>Por que fazer parte?</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon">
              <i className={feature.icon}></i>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
