import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import auth from "../Hooks/authentication.config";
import axios from "axios";



export const userContext = createContext(null);
// eslint-disable-next-line
const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [userCollection, setUserCollection] = useState({})

    const createEmailPasswordUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createGoogleUser = () => {
        const provider = new GoogleAuthProvider();
        setLoader(true);
        return signInWithPopup(auth, provider);

    }

    const loggedinUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user


                axios.get(`https://blood-donation-server-eight.vercel.app/user/${user?.email}`)
                    .then(res => {
                        setUserCollection(res?.data);
                    })

                setUser(user);
                setLoader(false);

            } else {
                // User is signed out
                // ...
                setLoader(true);
            }
        }
        )
    }, []);

    const signUp = () => {
        signOut(auth).then(() => {
            setUser(null);
            setLoader(false)
        }).catch(() => {

        });
    }

    const currenUserCollection = () => {

    }

    const authInfo = {
        user,
        loader,
        createEmailPasswordUser,
        createGoogleUser,
        loggedinUser,
        signUp,
        userCollection,
    }

    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;