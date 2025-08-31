import {signOut, onAuthStateChanged , signInWithEmailAndPassword} from "firebase/auth";
import {auth} from './config';

const handleLogout = async () => {
    return signOut(auth).then(() => {
      localStorage.removeItem('token');
    // Sign-out successful.
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });
      
};


const handleLogin = async (email, password) => {
        try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login failed:", error.message);
  }
}

const getToken = async () => {
  try {
    const token = await auth.currentUser.getIdToken(); 
  return token;
  } catch (error) {
    return null;
  }
  
}
 // async handling
// const handleRefreshing = ()=> {
//   return new Promise((resolve, reject)=> {
//     try {
//      const unsubscribe = ()=>  onAuthStateChanged(auth, (user) => {
//   if (user) {
//     resolve(true)
//     console.log("User is logged in:");
//   } else {
//     resolve(false);
//     console.log("No user is logged in");
//   }
// });
// unsubscribe();
//     } catch (error) {
//         reject(error);
//     }
//   }) 
// };

const handleRefreshing = (setIsLoggedIn)=> {
const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
      console.log("User is logged in:");
    } else {
      setIsLoggedIn(false);
      console.log("No user is logged in");
    }
  });
  return unsubscribe;
}

export {handleLogin , handleLogout , handleRefreshing, getToken}