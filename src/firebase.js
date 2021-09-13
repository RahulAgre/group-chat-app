import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyD3OA0-0w82jUuQ9Jpv9HrfjSYqDwnZIUQ",
  authDomain: "group-chat-b5b7b.firebaseapp.com",
  projectId: "group-chat-b5b7b",
  storageBucket: "group-chat-b5b7b.appspot.com",
  messagingSenderId: "553580735777",
  appId: "1:553580735777:web:f20dd31edd939b127b2260",
  measurementId: "G-XQHXM36QBJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
