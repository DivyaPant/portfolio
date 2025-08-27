import { useEffect, useState } from "react";


const ProjectModal = (props) => {
   const { type, editDetails, setEditDetails} = props;
   const [skillTags, setSkillTags] = useState(editDetails.skillTags || []);
   const [chipInputVal, setChipInputVal] = useState("");

   const handleAddChip = (e) => {
    if(e.key === "Backspace" && !chipInputVal){
      setSkillTags(skillTags.slice(0, -1));
      return;
    }
      if (e.key !== 'Enter') return;
     const newChip = e.target.value;
     if (newChip && !skillTags.includes(newChip)) {
       setSkillTags([...skillTags, newChip]);
     }
     setChipInputVal("");
   };

   const handleDeleteChip = (_, i) => {
     setSkillTags(skillTags.filter((_, index) => i !== index));
   };

   useEffect(()=>{
       setEditDetails(prev => ({...prev, skillTags}));
   },[skillTags])

   const handleChangeInputValue = (e)=>{
const {name, value} = e.target;
setEditDetails(prev => ({...prev, [name]: value}))
   }

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
          <input type='text' id='project-title' name='title' required onChange={handleChangeInputValue} 
          defaultValue={editDetails?.title}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='project-description' className='text-xs'>Project Description</label>
          <textarea rows='5' id='project-description' name='description' required 
          onChange={handleChangeInputValue} defaultValue={editDetails?.description}></textarea>
        </div>
        <div className='form-group'>
          <label htmlFor='project-skills' className='text-xs'>Tech Stack</label>
          <div className="skills-wrapper">
            <span className="chips-wrapper">
              {
              skillTags.map((tag, index)=> {
                return (
                  <span className="chip" key={index}>
                    {tag}
                    <span onClick={() => handleDeleteChip('', index)}> X </span>
                  </span>
                )
              })
            }
             <span className="chip-input">
              <input
                onKeyDown={handleAddChip}
                id='project-skills'
                name='skillTags'
                placeholder=''
                onChange={(e) => setChipInputVal(e.target.value)}
                required
                value={chipInputVal}
              />
            </span>
            </span>
           
          </div>
          <span className="small-description">Press Enter after each skill</span>
        </div>
        <div className='form-group'>
          <label htmlFor='github-url' className='text-xs'>GitHub URL</label>
          <input type='url' id='github-url' name='githubUrl' required
           onChange={handleChangeInputValue} defaultValue={editDetails?.githubUrl} />
        </div>
        <div className='form-group'>
          <label htmlFor='live-url' className='text-xs'>Live URL</label>
          <input type='url' id='live-url' name='liveUrl' required onChange={handleChangeInputValue} defaultValue={editDetails?.liveUrl} />
        </div>
        <div className='radio-group'>
            <span className='published-label'>Published: </span>
            <span>
          <input type="radio" id="yes" name="published" value="yes" onChange={handleChangeInputValue} 
           defaultChecked={editDetails?.published}
          />
          <label htmlFor="yes">Yes</label></span><span>
          <input type="radio" id="no" name="published" value="no" onChange={handleChangeInputValue} 
           defaultChecked={!editDetails?.published}
          />
          <label htmlFor="no">No</label></span>
        </div>
      </form>
    </>
    )
    
  )
}

export default ProjectModal;
