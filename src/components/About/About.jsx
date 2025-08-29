import './about.css';
import {CodeIcon, PerformanceIcon, DesignIcon, GroupIcon} from '../../assets/customSvg/about';
import Tick from '../../assets/customSvg/tickMark';

const About = (props) => {
  const {ref} = props;
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
    <section className="main-container" ref={ref}>
      <div className='about-content'>
      <h2 className="section-heading text-2xl">
        About <span className="section-highlight">Me</span>
      </h2>
      <p className="section-subheading text-md">
        I'm a passionate developer with 5 years of experience
        creating digital products that users love. I believe great design and
        clean code go hand in hand.
      </p>
      <div className="about-story">
        <div className="story-text">
          <h3 className='text-lg'>My Story</h3>
          <p>
            My journey in tech began with a simple drive — the joy of creating. 
            I’ve always loved the idea of turning thoughts and ideas into something real, 
            something people can interact with on a screen. 
            I quickly realized that building applications was more than just writing 
            code — it was about shaping experiences. Over time, 
            I’ve come to see development as the perfect blend of creativity and logic, 
            where ideas take shape and challenges turn into opportunities.
          </p>
          <p>
            I understand the significance of continuous learning to remain current with the 
            latest industry trends and technologies. Therefore, I am committed to 
            expanding my knowledge and skills to stay ahead of the curve and achieve 
            greater success in my field. With every project, I keep learning, growing, 
            and building applications that truly make an impact.
          </p>
            <ul>
              <li>
                <Tick />
                MERN Stack</li>
              <li><Tick /> Mentor & Code Reviews</li>
            </ul>
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
