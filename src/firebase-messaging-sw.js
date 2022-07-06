importScripts("https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js");

firebase.initializeApp({
  apiKey: "AIzaSyA48k_YRM4ixlyZpFhxPUXV3Q2LcXmYlwk",
  authDomain: "sample-app-351311-c3232.firebaseapp.com",
  projectId: "sample-app-351311",
  storageBucket: "sample-app-351311.appspot.com",
  messagingSenderId: "182681285807",
  appId: "1:182681285807:web:4019fa486fef512a08105a",
  measurementId: "G-JX1ND9B6Q0"
});

// Initialize Firebase
const messaging = firebase.messaging();
const analytics = getAnalytics(app);
