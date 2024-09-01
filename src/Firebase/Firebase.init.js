import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyD6xeCFYkap3QGt_W1FtudY_hZpxpqT23I",
//   authDomain: "users-management-system-client.firebaseapp.com",
//   projectId: "users-management-system-client",
//   storageBucket: "users-management-system-client.appspot.com",
//   messagingSenderId: "787281274680",
    //   appId: "1:787281274680:web:5b89910dc7074db3db43cd"
    

    apiKey:import.meta.env.VITE_APIKEY,
    authDomain:import.meta.env.VITE_AUTHDOMAIN,
    projectId:import.meta.env.VITE_PROJECTID,
    storageBucket:import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
    appId:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);