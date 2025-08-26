import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import Modal from "./modal/Modal";
import { useState } from "react";

const Admin = () => {

const [openModal, setOpenModal] = useState(false);
    
async function login(email, password) {
        try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken(); // JWT from Firebase
    localStorage.setItem("token", token);
    setOpenModal(false);
  } catch (error) {
    console.error("Login failed:", error.message);
  }
}
  return (
    <>
    <div style={{
      position: 'absolute',
      textDecoration: 'underline',
      cursor: 'pointer'
    }} 
    onClick={() => setOpenModal(true)}
    >
      Admin
    </div> 
    
    {
    openModal && <Modal 
onClose={()=> setOpenModal(false)} 
onSubmit={()=> login("admin@example.com", "")} 
primaryButton={'Login'} 
secondaryButton="Cancel" 
title={'Admin Login'}
description={'Please login to Edit your portfolio'}
><div></div>
</Modal>
}

       </>
    
  );
};

export default Admin;
