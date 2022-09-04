import firebase from 'firebase/app';
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyA4ev5IXK20T_XOFKV24HrR9RQcSOUDrDc",
    authDomain: "fir-9ddd7.firebaseapp.com",
    projectId: "fir-9ddd7",
    storageBucket: "fir-9ddd7.appspot.com",
    messagingSenderId: "844684330803",
    appId: "1:844684330803:web:e2b9a1f0449e12849e6046",
    measurementId: "G-69WRBX0RDQ"
  };

export default function firebaseConn(){
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
}

