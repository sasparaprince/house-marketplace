
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// import { get } from "http";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTkc9KY7TbCwjqbQmHiPPYG4wuVcq479I",
  authDomain: "house-marketplace-411fb.firebaseapp.com",
  projectId: "house-marketplace-411fb",
  storageBucket: "house-marketplace-411fb.appspot.com",
  messagingSenderId: "345365771833",
  appId: "1:345365771833:web:bb42aa1e934d0dd627ffe8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();