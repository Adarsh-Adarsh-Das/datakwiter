var firebaseConfig = {
    apiKey: "AIzaSyDnFP8Rq_BguB5cHaZ9Qm-qaCV5aHBvq_4",
    authDomain: "kwiter-e41a9.firebaseapp.com",
    databaseURL: "https://kwiter-e41a9-default-rtdb.firebaseio.com",
    projectId: "kwiter-e41a9",
    storageBucket: "kwiter-e41a9.appspot.com",
    messagingSenderId: "587899414524",
    appId: "1:587899414524:web:850cb861780702973ff479"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update(
        {
            purpose:"adding user"
        }
    );
}