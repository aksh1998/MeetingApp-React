import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDm7c8OzOMdacvxokIVhRqtjrJYS21bjqo",
    authDomain: "meeting-management-react.firebaseapp.com",
    databaseURL: "https://meeting-management-react-default-rtdb.firebaseio.com",
    projectId: "meeting-management-react",
    storageBucket: "meeting-management-react.appspot.com",
    messagingSenderId: "655969321225",
    appId: "1:655969321225:web:7b11f3f2686af436a4d3d8",
    measurementId: "G-0D3MXZQ0RN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;