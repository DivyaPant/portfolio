import './Skills.css';
import SkillsContent from './content';

const Skills = (props)=>{
    const {ref} = props;

    return (
    <section className='skills-container main-container' ref={ref} id="skills-ref">
        <h2 className="section-heading text-2xl">
        Technical <span className="section-highlight">Skills</span>
      </h2>
      <p className="section-subheading text-md">
        Proficient in frontend and backend technologies with a strong 
        focus on creating responsive, high-performance, and maintainable software solutions.
      </p>
               <div className='skills-description'>
                {
                    SkillsContent.map((item,i)=>{
                        return (
                            <div className='skill' key={i}>
                            <img src = {item.img} alt={item.stack}/>
                            <span>{item.stack}</span>
                            <div className='outer'>
                                <div className='progress' style={{width: item.width}}></div>
                            </div>
                            </div>
                        )
                    })
                }
                
               </div>
    </section>
    );
}

export default Skills;