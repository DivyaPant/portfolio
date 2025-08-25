import React from 'react'

const ProjectModal = (props) => {
   const { type, editDetails, setEditDetails} = props
  return (
    type === 'remove' ? (
      <>
          <p>
            <strong>Note:</strong> This will not delete the project itself. It only removes its connection here.
          </p>
          <p>You can always add it back later.</p>
      </>
    ) : (
      <>
      <form className='modal-form'>
        <div className='form-group'>
          <label htmlFor='project-title' className='text-xs'>Project Title</label>
          <input type='text' id='project-title' name='project-title' required />
        </div>
        <div className='form-group'>
          <label htmlFor='project-description' className='text-xs'>Project Description</label>
          <textarea rows='5' id='project-description' name='project-description' required></textarea>
        </div>
        <div className='form-group'>
          <label htmlFor='project-skills' className='text-xs'>Tech Stack</label>
          <textarea rows='1' className='skills-wrapper'
           id='project-skills' name='project-skills' placeholder='e.g. HTML, CSS, JavaScript' required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='github-url' className='text-xs'>GitHub URL</label>
          <input type='url' id='github-url' name='github-url' required />
        </div>
        <div className='form-group'>
          <label htmlFor='live-url' className='text-xs'>Live URL</label>
          <input type='url' id='live-url' name='live-url' required />
        </div>
        <div className='radio-group'>
            <span className='published-label'>Published: </span>
            <span>
          <input type="radio" id="yes" name="published" value="yes" />
          <label htmlFor="yes">Yes</label></span><span>
          <input type="radio" id="no" name="published" value="no"/>
          <label htmlFor="no">No</label></span>
        </div>
      </form>
    </>
    )
    
  )
}

export default ProjectModal;
