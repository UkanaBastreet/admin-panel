// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  Auth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2BjRGkPyT_dnwoyHAXeRVRvnlACadf2Q",
  authDomain: "delivery-3d5c9.firebaseapp.com",
  databaseURL: "https://delivery-3d5c9-default-rtdb.firebaseio.com",
  projectId: "delivery-3d5c9",
  storageBucket: "delivery-3d5c9.appspot.com",
  messagingSenderId: "817387200470",
  appId: "1:817387200470:web:a3453cddb1edf0628d8e77",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

class AuthApi {
  constructor(private auth: Auth) {}
  async register({ email, password }: registerParams) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }
  async login({ email, password }: loginParams) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }
}
export const authApi = new AuthApi(auth);

export interface registerParams {
  email: string;
  // name: string;
  password: string;
}

export interface loginParams {
  email: string;
  password: string;
}
