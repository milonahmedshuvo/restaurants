import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";




const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null)




const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)
     const axiosPublic = useAxiosPublic()




     useEffect(()=>{
     const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log("curent user", currentUser )
            setLoading(false)

            if(currentUser) {
                // i will set token here: 
                const userInfo = { email: currentUser.email }
               axiosPublic.post("/users/jwt", userInfo )
               .then(res => {
                console.log( "jwt", res.data)
                localStorage.setItem("access-token", res.data)
               })



            }else{
                // remove token here if stored token client site: local storage, chacing in momery

                localStorage.removeItem("access-token")
            }


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

     const googleSignin = () => {
        return signInWithPopup(auth,provider)
     }

     const logOut = () => {
        return signOut(auth)
     }


     const userUpdateProfile = (name, photoURL) => {
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL, 
          })
     }



    const authInfo = {user, loading, createUser, signinUser, logOut, userUpdateProfile, googleSignin }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;