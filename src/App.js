import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SignIn from './components/SignIn';

// Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyCOL5vL9ic0vFsoHGEDAl5Ro0sE6lQ6roc",
  authDomain: "superchat-8d4e5.firebaseapp.com",
  projectId: "superchat-8d4e5",
  storageBucket: "superchat-8d4e5.appspot.com",
  messagingSenderId: "155023605232",
  appId: "1:155023605232:web:05c143c9c7840a78783135",
  measurementId: "G-JR8K3BR4HR"
})

// Firebase services
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <SignIn/>
      <SignOut/>
      <ChatRoom/>
      <ChatMessage/>
    </div>
  );
}

export default App;


