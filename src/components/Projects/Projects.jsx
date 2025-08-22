import './Projects.css';
import { ExternalLinkIcon } from '../../assets/customSvg/projects';
import { GithubIcon } from '../../assets/customSvg/hero';

const Projects = ()=> {
    return (
        <section className="main-container">
            <div className='projects-content'>
            <h2 className="section-heading text-2xl"> My <span className="section-highlight">Projects</span></h2>
            <p className="section-subheading text-md">
                A selection of projects that showcase my skills in development, design, and problem-solving.</p>
            <div className='projects-container'>
{
    Array.from({ length: 4 }).map((_, index) => (
        <div className='project-card' key={index}>
             <div className='link-container'>
                <span className='link-icon'><GithubIcon /></span>
                <span className='link-icon'><ExternalLinkIcon /></span>
            </div>
            <h3 className='text-md project-title'>Project Title</h3>
            <p className='project-description'>
                Project description goes here.
                Each project demonstrates my ability to build responsive and interactive 
                web applications using modern technologies.
            </p>
            <div className='skills'>
                <span className='skill-badge text-xs'>HTML</span>
                <span className='skill-badge text-xs'>CSS</span>
                <span className='skill-badge text-xs'>JavaScript</span>
                <span className='skill-badge text-xs'>React</span>
            </div>
        </div>
    ))
}
                
            </div>
            <button className='btn btn-secondary'>View All Projects</button>
</div>
        </section>

    )
};

export default Projects;
