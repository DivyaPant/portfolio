// import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Name / Intro */}
      <h1 className="hero-title">
        👋 Hi, I’m <span className="highlight">John Doe</span>
      </h1>

      {/* Tagline */}
       {/* Tagline */}
      <h2 className="hero-subtitle">
        <span className="tag-alt">Full-Stack Developer</span> | 
        <span className="tag"> Problem Solver</span> | 
        <span className="tag-alt"> Tech Enthusiast</span>
      </h2>

      {/* Short Intro */}
      <p className="hero-text">
        I design and build scalable, efficient, and user-friendly applications — 
        from sleek interfaces to powerful backends.  
        Explore my work to see how I turn ideas into impactful digital solutions.
      </p>

      {/* CTA Buttons */}
      <div className="hero-buttons">
        <a href="#projects" className="btn-primary">Explore Projects</a>
        <a href="#contact" className="btn-secondary">Get In Touch</a>
      </div>
    </section>
  );
}
