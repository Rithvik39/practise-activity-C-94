var firebaseConfig = {
    apiKey: "AIzaSyBvNzQISqcT3GysrFzBaD-MkTYgkHGbREQ",
    authDomain: "practice-activity-c-94.firebaseapp.com",
    databaseURL: "https://practice-activity-c-94-default-rtdb.firebaseio.com",
    projectId: "practice-activity-c-94",
    storageBucket: "practice-activity-c-94.appspot.com",
    messagingSenderId: "677386926139",
    appId: "1:677386926139:web:3a89616ba265ea1583c41e",
    measurementId: "G-R0GJ41905K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_username(){
      user_name= document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }