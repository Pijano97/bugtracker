import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAa25sZdwR_uUWlUeQHePXKuq0cBiuVJFw",
	authDomain: "bugtracker-3bfe3.firebaseapp.com",
	projectId: "bugtracker-3bfe3",
	storageBucket: "bugtracker-3bfe3.appspot.com",
	messagingSenderId: "1019943599539",
	appId: "1:1019943599539:web:ed44965294cc313d5d9fc6",
	measurementId: "G-SLK4MRZV3J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
