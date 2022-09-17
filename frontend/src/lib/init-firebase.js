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
  get
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
const db = getDatabase();

export function pushStudentInfo(user, first, last, pass, DOB, academics) {
  set(ref(db, "users/student/" + user), {
    firstName: first,
    lastName: last,
    password: pass,
    DOB: DOB,
    academics: academics,
  });
}
var firstname;
var lastname;

export function pullStudentFirstName(user) {
  get(child(ref(db), `users/student/` + user + '/firstName')).then((snapshot) => {
      if (snapshot.exists()) {
          console.log(snapshot.val());
          firstname = snapshot.val();
          return firstname;
      } else {
          console.log("No data available for " + user);
      }
  }).catch((error) => {
      console.error(error);
  });
}

export function pushFirstName() {
  return firstname;
}

export function pullStudentLastName(user) {
  get(child(ref(db), `users/student/` + user + '/lastName')).then((snapshot) => {
      if (snapshot.exists()) {
          console.log(snapshot.val());
          lastname = snapshot.val();
          return lastname;
      } else {
          console.log("No data available for " + user);
      }
  }).catch((error) => {
      console.error(error);
  });
}

export function pushLastName() {
  return lastname;
}