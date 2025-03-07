
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js"; 
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAQugL5ze3EZ7Sz9AIu1YxG-7m447CWtNk",
    authDomain: "data-base-ea125.firebaseapp.com",
    projectId: "data-base-ea125",
    storageBucket: "data-base-ea125.firebasestorage.app",
    messagingSenderId: "865816788430",
    appId: "1:865816788430:web:48ca85461096414af1bf9f",
    measurementId: "G-B1F5DWNXYR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);

   const feedbackForm = document.getElementById('feedbackForm');  
    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const email = document.getElementById("email").value;
        const name = document.getElementById("name").value;
        const rating = document.getElementById("rating").value;
        const message = document.getElementById("message").value;
    
        push(ref(database, "feedback"), {email, name, rating, message})
        .then(()=>{
            alert("Thankyou for your feedback");
            feedbackForm.reset();
        })
        .catch((error)=>{
            alert("Error: "+ error.message);
        })
    }); 