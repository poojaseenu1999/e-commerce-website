import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyChFbIKo9Zg4N9oeHXc9AK212UgdQUupl4",
    authDomain: "crown-clothing-70f9c.firebaseapp.com",
    projectId: "crown-clothing-70f9c",
    storageBucket: "crown-clothing-70f9c.appspot.com",
    messagingSenderId: "434080045047",
    appId: "1:434080045047:web:2e7897a2aae4c9b15540f2",
    measurementId: "G-KRPTK3CS55"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
     if (!userAuth) return;
     const userRef = firestore.doc(`users/${userAuth.uid}`);
     const snapShot = await userRef.get();
     if(!snapShot.exists){
        const { displayName, email } = userAuth;  
        const createAt = new Date();
        try {
            await userRef.set({
             displayName,
             email,
             createAt,
             ...additionalData   
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
     }
     return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 