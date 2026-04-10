export default function Hero() {
  return (
    <section className="container animate-fade-in" style={{ paddingTop: '10rem', paddingBottom: '6rem', textAlign: 'center' }}>
      <span className="badge">Innovation at Scale</span>
      <h1 style={{ maxWidth: '900px', margin: '0 auto 1.5rem' }}>Next Generation Performance & Design</h1>
      <p style={{ margin: '0 auto 2.5rem', maxWidth: '650px' }}>
        Experience the future of web applications with our modular and highly optimized 
        Next.js architecture.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <a href="#" className="btn btn-primary">Start Building</a>
        <a href="https://nextjs.org/docs" target="_blank" className="btn btn-secondary">Learn More</a>
      </div>
    </section>
  );
}
