const { initializeApp } = require('firebase/app');
const { getDatabase, ref, get, child } = require('firebase/database');

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnSUsruqVw9DvS5ZUkau_vMBPF6_bc4GA",
  authDomain: "riohs-7baf9.firebaseapp.com",
  databaseURL: "https://riohs-7baf9-default-rtdb.firebaseio.com",
  projectId: "riohs-7baf9",
  storageBucket: "riohs-7baf9.appspot.com",
  messagingSenderId: "119866808766",
  appId: "1:119866808766:web:94a875e3e1def95ba9c1ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const fetchData = async (path) => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, path));
    if (snapshot.exists()) {
      console.log('Data received from Firebase:', snapshot.val());
      return snapshot.val();
    } else {
      console.error('No data available at the provided path');
      return null;
    }
  } catch (err) {
    console.error('Error fetching data from Firebase:', err);
    return null;
  }
};


const path = 'CourseData/';
fetchData(path).then(data => {
  console.log('Data:', data);
});
