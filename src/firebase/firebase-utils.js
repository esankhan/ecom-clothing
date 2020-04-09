import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBlweTcDSqBO-LKommY8Ds-BE9-9f_U0AM",
  authDomain: "ecom-cloth.firebaseapp.com",
  databaseURL: "https://ecom-cloth.firebaseio.com",
  projectId: "ecom-cloth",
  storageBucket: "ecom-cloth.appspot.com",
  messagingSenderId: "46499801062",
  appId: "1:46499801062:web:5e941258489a2765a21827",
  measurementId: "G-S9ZZQ9C8T3",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating User ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
