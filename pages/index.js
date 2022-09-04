import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react';
import styles from '../styles/Home.module.css'
import firebaseConn from '../firebase/firebaseConn';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getMetadata } from 'firebase/storage';
import md5 from 'md5';



firebaseConn()

export default function Home() {

  const inputEl = useRef(null);

  function Onclick() {
    firebase.firestore().collection("user").doc('sssss').set({ name: "sdafsdf", email: "sdffdasdfs" })

  }

  firebase.firestore().collection("user").doc('sssss').onSnapshot(function (doc) {
    console.log(doc.data())
  })


  const uploadFile = async () => {
    var storage = firebase.storage();
    
    var file = inputEl.current.files[0]
    let date = new Date()
    let name = md5(date.getMilliseconds() + date + Math.floor((Math.random() * 1) + 1000))+ file.name
    var pathReference = storage.ref('user_uploads/'+name);
    await pathReference.put(file)
    let url = 'https://firebasestorage.googleapis.com/v0/b/fir-9ddd7.appspot.com/o/user_uploads%2F'+name+'?alt=media'
    console.log(url)


  }




  return (
    <div className="App">
      <input type="file"
        onChange={uploadFile}
        ref={inputEl}
      />
      <button onClick={()=>{Onclick()}}>ok</button>
    </div>
  );
}
