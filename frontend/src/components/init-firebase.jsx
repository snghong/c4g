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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// importing the DATABASE files that we need to read/write from your DB.
import {
  getDatabase,
  ref,
  set,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
const db = getDatabase();

var test = 2;
var score;
export function getDemoStudentScore() {
  get(child(ref(db), 'users/student/ryanreynolds/score')).then((snapshot) => {
    score = snapshot.val();
    return score;
  }
  )
}

export function getStudentScore(){
  return score;
}

export default app;