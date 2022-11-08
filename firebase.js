import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "You Api key here",
  authDomain: "eyes-movement-stat-app.firebaseapp.com",
  projectId: "eyes-movement-stat-app",
  storageBucket: "eyes-movement-stat-app.appspot.com",
  messagingSenderId: "Your id here",
  appId: "Your id here",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
