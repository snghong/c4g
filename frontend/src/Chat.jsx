import React, { useEffect, useRef, useState } from 'react';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";

// Change only this const if you switch databases!!
const firebaseConfig = {
  apiKey: "AIzaSyBIXVk8cN7a6DcTXEpRcSd1yfTB4xtZuVM",
  authDomain: "jreamschooldb.firebaseapp.com",
  projectId: "jreamschooldb",
  storageBucket: "jreamschooldb.appspot.com",
  messagingSenderId: "939858500372",
  appId: "1:939858500372:web:4f5a57eecee85b25a7c001",
  measurementId: "G-S7ZZGPYK2T",
};

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const app = initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const [user] = useAuthState(auth);
export default function Chat() {



  return (
    <div className="App">
        Hi
      {/* <ChatRoom />  */}
    </div>
  );
}
function ChatRoom() {

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limitToLast(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    return (<>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </main>
  
    </>);
}
  
  
  
function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (<>
        <div className={`message ${messageClass}`}>
        <img src={photoURL} />
        <p>{text}</p>
        </div>
    </>);
}