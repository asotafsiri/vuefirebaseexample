
import firebase from 'firebase'

let config = {
  apiKey: "AIzaSyBQt-IijRr8Ne-CZE3gDf-L_aPxxkPC15g",
  authDomain: "turnout-e2cee.firebaseapp.com",
  databaseURL: "https://turnout-e2cee.firebaseio.com",
  projectId: "turnout-e2cee",
  storageBucket: "turnout-e2cee.appspot.com",
  messagingSenderId: "1061112009273"
};
export const app = firebase.initializeApp(config);
export const eventsRef = app.database().ref().child('events')
export const db = app.database()