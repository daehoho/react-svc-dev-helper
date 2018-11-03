import * as firebase from 'firebase'

let config = {
    apiKey: "AIzaSyCM1-pcthe_9RvZD-Z3gTCR1hk3pnhxrTw",
    authDomain: "svcdevhelpr.firebaseapp.com",
    databaseURL: "https://svcdevhelpr.firebaseio.com",
    projectId: "svcdevhelpr",
    storageBucket: "svcdevhelpr.appspot.com",
    messagingSenderId: "901811081275"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;