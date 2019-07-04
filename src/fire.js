import firebase from 'firebase'
 var firebaseConfig = {
    apiKey: "AIzaSyAE-2EST2TyDO6mLjYPeaMQ2HZKVwYwO6Y",
    authDomain: "chating-d41c5.firebaseapp.com",
    databaseURL: "https://chating-d41c5.firebaseio.com",
    projectId: "chating-d41c5",
    storageBucket: "",
    messagingSenderId: "534108283300",
    appId: "1:534108283300:web:b336f8e90a4b200b"
  };
  var fire=firebase.initializeApp(firebaseConfig);

  export default fire