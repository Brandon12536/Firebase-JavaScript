// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0mdqqmBxOQdR7K_ASWcMWQ764kgmvkKc",
  authDomain: "fir-javascript-crud-22a1b.firebaseapp.com",
  projectId: "fir-javascript-crud-22a1b",
  storageBucket: "fir-javascript-crud-22a1b.appspot.com",
  messagingSenderId: "890980929497",
  appId: "1:890980929497:web:19e723d38103cc48b593c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const getTasks = () => getDocs(collection(db, "tasks"));

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);
