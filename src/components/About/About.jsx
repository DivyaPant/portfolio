import './about.css';
import {CodeIcon, PerformanceIcon, DesignIcon, GroupIcon} from '../../assets/customSvg/about';

const About = () => {
  const skills = [
          {
            icon: <CodeIcon />,
            title: 'Frontend Development',
            desc: 'React, TypeScript, Next.js, Tailwind CSS'
          },
          {
            icon: <DesignIcon />,
            title: 'UI/UX Design',
            desc: 'Figma, Adobe Creative Suite, Design Systems',
          },
          {
            icon: <PerformanceIcon />,
            title: 'Performance',
            desc: 'Optimization, SEO, Web Vitals, Accessibility',
          },
          {
            icon: <GroupIcon />,
            title: 'Collaboration',
            desc: 'Team Leadership, Agile, Mentoring',
          },
        ];
        
  return (
    <section className="main-container">
      <div className='about-content'>
      <h2 className="section-heading text-2xl">
        About <span className="section-highlight">Me</span>
      </h2>
      <p className="section-subheading text-md">
        I'm a passionate developer and designer with 5+ years of experience
        creating digital products that users love. I believe great design and
        clean code go hand in hand.
      </p>
      <div className="about-story">
        <div className="story-text">
          <h3 className='text-lg'>My Story</h3>
          <p>
            Started my journey in computer science but quickly fell in love with
            the intersection of technology and design. I've had the privilege of
            working with startups and Fortune 500 companies.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new design trends,
            contributing to open source, or hiking with my camera in search of
            the perfect shot.
          </p>
        </div>

        <div className="story-image">
          <div className='image-card-container'>
          <div className="image-card">
            <span role="img" aria-label="coder" className="emoji">
              👨‍💻
            </span>
          </div></div>
        </div>
      </div>
      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill-card" key={skill.title}>
            <div className="icon-wrapper">
              <div className='icon'>{skill.icon}</div>
              </div>
            <h4>{skill.title}</h4>
            <p className='text-sm'>{skill.desc}</p>
          </div>
        ))}
      </div></div>
    </section>
  );
}

export default About;
