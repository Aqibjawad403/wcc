export default function Features() {
  const items = [
    { title: "Ultra Performance", desc: "Built with the latest Next.js features for maximum speed and SEO efficiency." },
    { title: "Elegant Design", desc: "Pre-integrated design system with support for modern glassmorphic aesthetics." },
    { title: "Modular Architecture", desc: "Easily maintainable codebase with scalable component structures." }
  ];

  return (
    <section className="container" style={{ paddingBottom: '8rem' }}>
      <div className="grid">
        {items.map((item, idx) => (
          <div key={idx} className="glass-card animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--header-blue)', fontSize: '1.25rem' }}>{item.title}</h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--muted)' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
