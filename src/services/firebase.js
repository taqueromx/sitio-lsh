import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8_t_7YyBOOrsMwSJcpslvsFpcs0GWzq8",
    authDomain: "tec-lsh-2ace6.firebaseapp.com",
    databaseURL: "https://tec-lsh-2ace6.firebaseio.com",
    projectId: "tec-lsh-2ace6",
    storageBucket: "tec-lsh-2ace6.appspot.com",
    messagingSenderId: "303669257014",
    appId: "1:303669257014:web:3fd9bceb2667cc2caa4997",
    measurementId: "G-JD6LJ9R7LV"
};

Firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const firebase = firebase.firestore();