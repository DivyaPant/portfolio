import './Hero.css';
import {GithubIcon, MailIcon, LinkedinIcon} from '../../assets/customSvg/hero';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className='text-md hello-text'>Hello, I'm</div>
        <div className='name-text'>Divya Pant</div>
        <div className='hero-highlight'>Full-Stack Developer | Problem Solver | Tech Enthusiast</div>
        <p className='text-md hero-description'>Between sips of coffee and sparks of chaos, I make pixels and logic play 
            nicely on the web —because building things should be just as enjoyable as using them.
            </p>
        <div className="hero-btn-group text-xs">
          <a href="#work" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Let's Connect</a>
        </div>
        <div className='hero-icons'>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='hero-icon-link'>
              <GithubIcon /> 
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='hero-icon-link'>
              <LinkedinIcon />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='hero-icon-link'>
            
              <MailIcon />  
            </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
