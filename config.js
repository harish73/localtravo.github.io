var firebaseConfig = {
    apiKey: "AIzaSyD7lr-O-XtIN-wPXf_KY0cP5hN0q20Os0A",
    authDomain: "localtravo.firebaseapp.com",
    databaseURL: "https://localtravo.firebaseio.com",
    projectId: "localtravo",
    storageBucket: "",
    messagingSenderId: "896820095638",
    appId: "1:896820095638:web:57d9a794b1e4bf79"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  databaseURL: "https://your-app.firebaseio.com",
  storageBucket: "your-app.appspot.com",
};
firebase.initializeApp(config);

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID = 'YOUR_OAUTH_CLIENT_ID';
