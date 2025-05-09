import firebase from "firebase/compat/app";
import { get, getDatabase, ref } from "firebase/database";

export const connect = async (formData: FormData) => {
  const config = {
    apiKey: formData.get("apiKey"),
    authDomain: formData.get("authDomain"),
    databaseURL: formData.get("databaseURL"),
    projectId: formData.get("projectId"),
    storageBucket: formData.get("storageBucket"),
    messagingSenderId: formData.get("messagingSenderId"),
    appId: formData.get("appId"),
  };
  const app = firebase.initializeApp(config);
  const db = getDatabase(app);
  const snapshot = await get(ref(db));
  if (snapshot.exists()) {
    console.log(snapshot.val());
  }
};
