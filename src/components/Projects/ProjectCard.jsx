import { ExternalLinkIcon } from '../../assets/customSvg/projects';
import { GithubIcon } from '../../assets/customSvg/hero';
import { useContext } from 'react';
import {UserContext} from '../../context/UserContext';

const ProjectCard = (props)=> {
    const {project, index, handleProjectEdits} = props;
    const isLoggedIn = useContext(UserContext);
    return (
        <div className='project-card' key={index}>
             <div className='link-container'>
                <span className='link-icon'><GithubIcon /></span>
                <span className='link-icon'><ExternalLinkIcon /></span>
            </div>
            <h3 className='text-md project-title'>{project.title}</h3>
            <p className='project-description'>
                {project.description}
            </p>
            <div className='skills'>
                {project.skillTags && project.skillTags.map((skill, index) => (
                    <span className='skill-badge text-xs' key={index}>{skill}</span>
                ))}
            </div>
            {isLoggedIn &&
            <div className='admin-buttons'>
                <button className='btn btn-secondary' onClick={()=> handleProjectEdits('update', project)}>Update</button>
                <button className='btn btn-secondary' onClick={()=> handleProjectEdits('remove', project)}>Remove</button>
            </div>}
        </div>
    )
};

export default ProjectCard;