
import Modal from "../modal/Modal";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


const Login = ({login, handleLogout}) => {
const isLoggedIn = useContext(UserContext)

const [openModal, setOpenModal] = useState(false);
const [loginDetails, setLoginDetails] = useState({});

const handleChange = (e) => {
  setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
};

useEffect(()=> {
  setOpenModal(false)
},[isLoggedIn]);

  return (
    <>
    {
      isLoggedIn ? <div className="admin-login-section"
    onClick={handleLogout}
    >
      LogOut
    </div> : 
    <div className="admin-login-section"
    onClick={() => setOpenModal(true)}
    >
      Admin Login
    </div> 
    }
    
    {
    openModal && <Modal 
onClose={()=> setOpenModal(false)} 
onSubmit={()=> login(loginDetails?.email, loginDetails?.password)} 
primaryButton={'Login'} 
secondaryButton="Cancel" 
title={'Admin Login'}
description={'Please login to Edit your portfolio'}
><form className="login-form">
  <div className="form-group">
  <input type="email" placeholder="Email" name="email" onChange={handleChange} autoComplete="off"/></div>
  <div className="form-group">
  <input type="password" placeholder="Password" name="password" onChange={handleChange} autoComplete="off"/></div>
</form>
</Modal>
}

       </>
    
  );
};

export default Login;
