// import firebase from 'firebase/app'; // Get the based import
// import 'firebase/firestore';
// import 'firebase/auth';
// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export interface FireBaseConfig {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
	measurementId: string;
}

const firebaseConfig: FireBaseConfig = {
	apiKey: 'AIzaSyCfJM-4F99m-8rcg9TPtLOiqYoxXeJKRcc',
	authDomain: 'crwn-db-1db97.firebaseapp.com',
	projectId: 'crwn-db-1db97',
	storageBucket: 'crwn-db-1db97.appspot.com',
	messagingSenderId: '292051714517',
	appId: '1:292051714517:web:b489042f72d5166d9ffd5c',
	measurementId: 'G-6EN6DCCM62',
};

//  Initialize firebase app, load config data into app
initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ params: 'select_account' }); // show google popup with list of account to login
provider.setCustomParameters({ prompt: 'select_account' }); // show google popup with list of account to login

export const signInWithGoogle = () => signInWithPopup(auth, provider);

// export default firebase;
