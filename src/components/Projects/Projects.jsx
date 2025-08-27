import { useState, useEffect } from 'react';
import './Projects.css';
import { ExternalLinkIcon } from '../../assets/customSvg/projects';
import { GithubIcon } from '../../assets/customSvg/hero';
import plusIcon from '../../assets/plusIcon.svg';
import Modal from '../modal/Modal';
import ProjectModal from './ProjectModal';
import {modalConstants} from '../../constant';
import { getProjects, postProjects, updateProjects, deleteProjects } from '../../api/RestServices';
import { useContext } from 'react';
import {UserContext} from '../../context/UserContext';


const Projects = ()=> {
    const isLoggedIn = useContext(UserContext)
    const [openModal, setOpenModal] = useState(false);
    const [modalDetails, setModalDetails] = useState({
        title: '',
        description: ''
    });
    const [actionType, setActionType] = useState('');
    const [editDetails, setEditDetails] = useState({});
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
            try {
                const resp = await getProjects();
                setProjects(resp);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
            
        };

         useEffect(() => {
        fetchProjects();
    }, []); 
   
    const handleModalClose = ()=> {
        setOpenModal(false);
    };

    const handleProjectEdits = (action, obj={})=>{
        setModalDetails(modalConstants[action]);
        setActionType(action);
        setEditDetails(obj);
        setOpenModal(true);
    };

    const handleSubmit = ()=> {
        if (actionType === 'add') {
            // Handle add project logic
            postProjects(editDetails).then(()=> {
                fetchProjects();
                handleModalClose();
            }).catch((error)=> {
                console.error('Error adding project:', error);
            })
        } else if (actionType === 'update') {
            // Handle update project logic
            updateProjects(editDetails._id, editDetails).then(()=> {
                fetchProjects();
                handleModalClose();
            }).catch((error)=> {
                console.error('Error updating project:', error);
            })
        } else if (actionType === 'remove') {
            // Handle remove project logic
            deleteProjects(editDetails._id).then(()=> {
                fetchProjects();
                handleModalClose();
            }).catch((error)=> {
                console.error('Error removing project:', error);
            })
        }
    }

    return (
        <section className="main-container">
            <div className='projects-content'>
            <h2 className="section-heading text-2xl"> My <span className="section-highlight">Projects</span></h2>
            <p className="section-subheading text-md">
                A selection of projects that showcase my skills in development, design, and problem-solving.</p>
                
            {
                isLoggedIn && 
                <div className='add-new-btn'>  
                    <button className='btn btn-primary admin-btn-add' onClick={()=> handleProjectEdits('add')}>
                         Add New Project
                    <img src={plusIcon} alt="Add New Project" />
                       
                    </button>
                </div>
            }
                
            <div className='projects-container'>
{
    projects.map((project, index) => (
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
    ))
}
                
            </div>
             {
                    projects.length === 0 && <div className='no-projects-available'>No projects found.</div>
                }
            {/* <button className='btn btn-secondary'>View All Projects</button> */}
</div>
{
    openModal && <Modal 
onClose={handleModalClose} 
onSubmit={handleSubmit} 
primaryButton={modalDetails.primaryButton || 'Submit'} 
secondaryButton="Cancel" 
title={modalDetails.title || ''}
description={modalDetails.description || ''}
>
 <ProjectModal type={actionType} editDetails={editDetails} setEditDetails={setEditDetails}/>
</Modal>
}
        </section>

    )
};

export default Projects;
