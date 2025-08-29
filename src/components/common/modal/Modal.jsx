import './Modal.css';

const Modal = (props) => {
    const { children, onClose, onSubmit, primaryButton, secondaryButton, title, description } = props;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {children}
        <div className='modal-btn-group'>
          <button className="btn btn-primary" onClick={onSubmit}>{primaryButton}</button>
          <button className="btn btn-secondary" onClick={onClose}>{secondaryButton}</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;