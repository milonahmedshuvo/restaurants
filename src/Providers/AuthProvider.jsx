import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";




const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)

     useEffect(()=>{
     const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log("curent user", currentUser )
            setLoading(false)
        })  
        return () => {
            return unsubcribe()
        }

     },[])



    const createUser = (email, password) => {
           setLoading(true)
           return createUserWithEmailAndPassword(auth, email, password)
     }


     const signinUser = (email, password ) => {
         setLoading(true)
         return signInWithEmailAndPassword(auth, email, password)
     }

     const logOut = () => {
        return signOut(auth)
     }


     const userUpdateProfile = (name, photoURL) => {
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL, 
          })
     }



    const authInfo = {user, loading, createUser, signinUser, logOut, userUpdateProfile }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;