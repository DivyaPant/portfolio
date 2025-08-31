import './Navbar.css';

const Navbar = (props) => {
  const {ref} = props;
  const handleClick = (e) => {
    const target = e.target;
    const sectionId = target.textContent.toLowerCase();
    ref[sectionId].current.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className='navbar-container'>
    <div className='floating-navbar'>
       
        <ul>
            <li className='navbar-item' onClick={handleClick}>Home</li>
            <li className='navbar-item' onClick={handleClick}>About</li>
            <li className='navbar-item' onClick={handleClick}>Skills</li>
            <li className='navbar-item' onClick={handleClick}>Projects</li>
            <li className='navbar-item' onClick={handleClick}>Contact</li>
        </ul>
        </div>
        </div>
  )
};

export default Navbar;
