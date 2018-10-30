import * as firebase from 'firebase'
let database;
let config = {
    apiKey: "AIzaSyCM1-pcthe_9RvZD-Z3gTCR1hk3pnhxrTw",
    authDomain: "svcdevhelpr.firebaseapp.com",
    databaseURL: "https://svcdevhelpr.firebaseio.com",
    projectId: "svcdevhelpr",
    storageBucket: "svcdevhelpr.appspot.com",
    messagingSenderId: "901811081275"
}

export const fire = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
  database = firebase.database()
}

export const getFireDB = () => {
    return database.ref('/').once('value')
}