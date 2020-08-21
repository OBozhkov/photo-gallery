import * as firebase from 'firebase/app';
import 'firebase/auth'

var firebaseConfig = {
	apiKey: "AIzaSyAVHiSvUq0OP8LosmXYFNvMEEelQo1KyeQ",
	authDomain: "photo-gallery-dev.firebaseapp.com",
	databaseURL: "https://photo-gallery-dev.firebaseio.com",
	projectId: "photo-gallery-dev",
	storageBucket: "photo-gallery-dev.appspot.com",
	messagingSenderId: "781109156935",
	appId: "1:781109156935:web:c27cbefd73dc55d229e562",
	measurementId: "G-2NC93WEZ0P"
};

let app = null

if (!firebase.apps.length) {
	app = firebase.initializeApp(firebaseConfig);
}

export default firebase;
