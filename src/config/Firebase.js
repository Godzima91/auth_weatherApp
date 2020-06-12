import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDkDl96VLOA6QFVdHJRka71Fy31psWi3QI",
    authDomain: "authweather-9813c.firebaseapp.com",
    databaseURL: "https://authweather-9813c.firebaseio.com",
    projectId: "authweather-9813c",
    storageBucket: "authweather-9813c.appspot.com",
    messagingSenderId: "641127300607",
    appId: "1:641127300607:web:7bd21a6b3a4af31b2d3bca",
    measurementId: "G-PBBKJ53X9C"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;