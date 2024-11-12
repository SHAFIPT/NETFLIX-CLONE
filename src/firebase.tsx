import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBVK9pd0wPm0lJ9Tgg9KRs6EwjrhiIZU-c",
  authDomain: "netflix-clone-b8aad.firebaseapp.com",
  projectId: "netflix-clone-b8aad",
  storageBucket: "netflix-clone-b8aad.firebasestorage.app",
  messagingSenderId: "979745136328",
  appId: "1:979745136328:web:0939b06f5e9cecd215cffd"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signUp = async (name :string,email : string ,password :string) =>{
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid : user.uid,
      name ,
      authProvider : 'local',
      email,
    })
  } catch (error : unknown) {
    const err = error as Error
    console.log(err);
    toast.error(err.message.split('/')[1].split('-').join(" ").replace(/\)$/, ""));
  }
}


const login = async (email :string , password :string)=>{
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error : unknown) {
    const err = error as Error
    console.log(err);
    toast.error(err.message.split('/')[1].split('-').join(" ").replace(/\)$/, ""));
  }
}

const logout = async () => {
  try {
      await signOut(auth);
      console.log("User logged out.");
  } catch (error) {
      console.log("Error during logout:", error);
  }
};

export {auth , db ,login ,signUp ,logout }