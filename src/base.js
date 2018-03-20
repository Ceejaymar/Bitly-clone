import firebase from 'firebase';
import Rebase from 're-base';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDDIs63OubXTQvpl4jch2Uw_dBZsqcfnqY",
  authDomain: "bitly-f7fdd.firebaseapp.com",
  databaseURL: "https://bitly-f7fdd.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;