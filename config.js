import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwkSrneSdAx_CqP7vWi4SOkWrWMY3xMjk",
  authDomain: "schoolattendence-61b74.firebaseapp.com",
  databaseURL: "https://schoolattendence-61b74-default-rtdb.firebaseio.com",
  projectId: "schoolattendence-61b74",
  storageBucket: "schoolattendence-61b74.appspot.com",
  messagingSenderId: "1067912450522",
  appId: "1:1067912450522:web:e9927ea3f8ca95ae04b0e3"
};

if (!firebase.apps.length) {
  var app = firebase.initializeApp(firebaseConfig);
}

  export default firebase.database();
 

  