import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className='text-md hello-text'>Hello, I'm</div>
        <div className='text-extra-large'>Divya Pant</div>
        <div className='text-xl'>Creative Developer</div>
        <p className='text-md hero-description'>Welcome to my portfolio! I'm a passionate developer specializing in web technologies. Explore my work and get to know more about me.</p>
        <div className="hero-btn-group">
          <a href="#work" className="hero-btn hero-btn-primary">View My Work</a>
          <a href="#contact" className="hero-btn hero-btn-secondary">Let's Connect</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
