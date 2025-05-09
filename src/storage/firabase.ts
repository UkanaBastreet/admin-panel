// import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
// import {
//   getDocs,
//   collection,
//   getFirestore,
//   Firestore,
// } from "firebase/firestore";
// import { get, getDatabase, ref } from "firebase/database";

// export class FirebaseApi {
//   app: FirebaseApp;
//   db: Firestore;
//   constructor(config: FirebaseOptions) {
//     this.app = initializeApp(config);
//     this.db = getFirestore(this.app);
//   }
//   async getAll() {
//     const snapshot = await getDocs(collection(this.db, ""));
//     return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   }
//   async getAllFrom() {
//     const db = getDatabase(this.app);
//     const snapshot = await get(ref(db));
//     if (snapshot.exists()) {
//       const val = snapshot.val();
//       console.log("val: ", val);
//     } else {
//       console.log("snapshot is not exist");
//     }
//   }
// }
// const firebaseConfig: FirebaseOptions = {
//   apiKey: "AIzaSyBBK2CcDSZfM8uP-d3Flm5TZEkX-_dcwyo",
//   authDomain: "blog-up-b3b4d.firebaseapp.com",
//   databaseURL: "https://blog-up-b3b4d-default-rtdb.firebaseio.com",
//   projectId: "blog-up-b3b4d",
//   storageBucket: "blog-up-b3b4d.firebasestorage.app",
//   messagingSenderId: "591143615531",
//   appId: "1:591143615531:web:695fef362703594cc83e6e",
// };
// const connectDb = (config: FirebaseOptions) => async () => {
//   const fbApi = new FirebaseApi(config);
//   fbApi.getAllFrom();
//   return fbApi;
// };
// export const connect = connectDb(firebaseConfig);
