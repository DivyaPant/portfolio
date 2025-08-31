import './Hero.css';
import {GithubIcon, MailIcon, LinkedinIcon} from '../../assets/customSvg/hero';

function Hero(props) {
  const {ref} = props;
  return (
    <section className="hero" ref={ref['home']}>
      <div className="hero-content">
        <div className='text-md hello-text'>Hello, I'm</div>
        <div className='name-text'>Divya Pant</div>
        <div className='hero-highlight'>Full-Stack Developer | Problem Solver | Tech Enthusiast</div>
        <p className='text-md hero-description'>Between sips of coffee and sparks of chaos, I make pixels and logic play 
            nicely on the web —because building things should be just as enjoyable as using them.
            </p>
        <div className="hero-btn-group text-xs">
          <button className="btn btn-primary" onClick={()=> ref.projects.current.scrollIntoView({ behavior: "smooth" })}>View My Work</button>
          <button className="btn btn-secondary" onClick={()=> ref.contact.current.scrollIntoView({ behavior: "smooth" })}>Let's Connect</button>
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
