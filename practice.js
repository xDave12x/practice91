var firebaseConfig = {
    apiKey: "AIzaSyCCvxKMalt1w7vhe0oXbUS8iqjsGUJMSCo",
    authDomain: "practice-88cc2.firebaseapp.com",
    databaseURL: "https://practice-88cc2-default-rtdb.firebaseio.com",
    projectId: "practice-88cc2",
    storageBucket: "practice-88cc2.appspot.com",
    messagingSenderId: "551824973163",
    appId: "1:551824973163:web:878bf73ea66079b87b802e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}