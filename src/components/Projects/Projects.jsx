import { useState, useEffect, useRef } from 'react';
import './Projects.css';
import plusIcon from '../../assets/plusIcon.svg';
import Modal from '../common/modal/Modal';
import ProjectModal from './ProjectModal';
import {modalConstants} from '../../constant';
import { getProjects, postProjects, updateProjects, deleteProjects } from '../../api/RestServices';
import { useContext } from 'react';
import {UserContext} from '../../context/UserContext';
import ProjectCard from './ProjectCard';
import Loader from '../common/loader/Loader';


const Projects = (props)=> {
    const {ref} = props;
    const titleErrRef = useRef(null);
    const isLoggedIn = useContext(UserContext)
    const [openModal, setOpenModal] = useState(false);
    const [modalDetails, setModalDetails] = useState({
        title: '',
        description: ''
    });
    const [actionType, setActionType] = useState('');
    const [editDetails, setEditDetails] = useState({});
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(false);
    };

    const handleProjectEdits = (action, obj={})=>{
        setIsLoading(false);
        setModalDetails(modalConstants[action]);
        setActionType(action);
        setEditDetails(obj);
        setOpenModal(true);
    };

    const handleSubmit = ()=> {
        if(isLoading) return;
        if(!editDetails.title || editDetails.title === '' ||editDetails.title.trim() === '') {
            titleErrRef.current.focus();
            return;
        }
        setIsLoading(true);
        if (actionType === 'add') {
            // Handle add project logic
            postProjects(editDetails).then(()=> {
                fetchProjects();
                handleModalClose();
            }).catch((error)=> {
                console.error('Error adding project:', error);
            }).finally(() => {
                setIsLoading(false);
            });
        } else if (actionType === 'update') {
            // Handle update project logic
            updateProjects(editDetails._id, editDetails).then(()=> {
                fetchProjects();
                handleModalClose();
            }).catch((error)=> {
                console.error('Error updating project:', error);
            }).finally(() => {
                setIsLoading(false);
            });
        } else if (actionType === 'remove') {
            // Handle remove project logic
            deleteProjects(editDetails._id).then(()=> {
                fetchProjects();
                handleModalClose();
            }).catch((error)=> {
                console.error('Error removing project:', error);
            }).finally(() => {
                setIsLoading(false);
            });
        }
    }

    return (
        <section className="main-container" ref={ref}>
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
        <ProjectCard project={project} index={index} handleProjectEdits={handleProjectEdits} key={project._id} />
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
primaryButton={isLoading ? <Loader/> : modalDetails.primaryButton || 'Submit'} 
secondaryButton="Cancel" 
title={modalDetails.title || ''}
description={modalDetails.description || ''}
>
 <ProjectModal type={actionType} editDetails={editDetails} setEditDetails={setEditDetails} titleErrRef={titleErrRef}/>
</Modal>
}
        </section>

    )
};

export default Projects;
