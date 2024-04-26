// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAilM2Bzmt_Ei4d_SGR8uba-vQiJ5dtXVc",
  authDomain: "liftease-d6753.firebaseapp.com",
  projectId: "liftease-d6753",
  storageBucket: "liftease-d6753.appspot.com",
  messagingSenderId: "908359837783",
  appId: "1:908359837783:web:41f5a36e99167277c95b12",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
export default firebaseApp;
