import { useState } from 'react';
import './Projects.css';
import { ExternalLinkIcon } from '../../assets/customSvg/projects';
import { GithubIcon } from '../../assets/customSvg/hero';
import plusIcon from '../../assets/plusIcon.svg';
import Modal from '../modal/Modal';
import ProjectModal from './ProjectModal';
import {modalConstants} from '../../constant';

const Projects = ()=> {
    const [openModal, setOpenModal] = useState(false);
    const [modalDetails, setModalDetails] = useState({
        title: '',
        description: ''
    });
    const [actionType, setActionType] = useState('');
    const [editDetails, setEditDetails] = useState({});

    const handleModalClose = ()=> {
        setOpenModal(false);
    };

    const handleProjectEdits = (action)=>{
        setOpenModal(true);
        setModalDetails(modalConstants[action]);
        setActionType(action);
        setEditDetails({});
    };

    const handleSubmit = ()=> {
        if (actionType === 'add') {
            // Handle add project logic
        } else if (actionType === 'update') {
            // Handle update project logic
        } else if (actionType === 'remove') {
            // Handle remove project logic
        }
    }

    return (
        <section className="main-container">
            <div className='projects-content'>
            <h2 className="section-heading text-2xl"> My <span className="section-highlight">Projects</span></h2>
            <p className="section-subheading text-md">
                A selection of projects that showcase my skills in development, design, and problem-solving.</p>
                
            {/* Admin */}
                <div className='add-new-btn'>  
                    <button className='btn btn-primary admin-btn-add' onClick={()=> handleProjectEdits('add')}>
                         Add New Project
                    <img src={plusIcon} alt="Add New Project" />
                       
                    </button>
                </div>
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
            {/* Admin */}
            <div className='admin-buttons'>
                <button className='btn btn-secondary' onClick={()=> handleProjectEdits('update')}>Update</button>
                <button className='btn btn-secondary' onClick={()=> handleProjectEdits('remove')}>Remove</button>
            </div>
        </div>
    ))
}
                
            </div>
            <button className='btn btn-secondary'>View All Projects</button>
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
