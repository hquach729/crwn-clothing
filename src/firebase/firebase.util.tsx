// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import { initializeApp } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
	getFirestore,
	collection,
	getDocs,
	getDoc,
	setDoc,
	query,
	where,
	doc,
} from 'firebase/firestore';
import type { User } from 'firebase/auth';
import type {
	Firestore,
	DocumentData,
	DocumentReference,
	DocumentSnapshot,
} from 'firebase/firestore';

// import type { DatabaseReference, DataSnapshot, Query } from 'firebase/database';

export interface FireBaseConfig {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
	measurementId: string;
}

// Firebase Web App API Key to use Sign In Service
const firebaseConfig: FireBaseConfig = {
	apiKey: 'AIzaSyCfJM-4F99m-8rcg9TPtLOiqYoxXeJKRcc',
	authDomain: 'crwn-db-1db97.firebaseapp.com',
	projectId: 'crwn-db-1db97',
	storageBucket: 'crwn-db-1db97.appspot.com',
	messagingSenderId: '292051714517',
	appId: '1:292051714517:web:b489042f72d5166d9ffd5c',
	measurementId: 'G-6EN6DCCM62',
};

//  Initialize firebase app, load config data into app, provide assess to firebase database
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getUser(uid: string) {
	const q = query(collection(db, 'users'), where('uid', '==', uid));
	const docSnap = await getDocs(q);
	docSnap.docs.map((user) => console.log(user.data()));
}

//  Google Sign Up Setup
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' }); // show google popup with list of account to login
export const signInWithGoogle = () => signInWithPopup(auth, provider);

type UserProfile = {
	docRef: DocumentReference<DocumentData>;
	docSnap: DocumentSnapshot<DocumentData>;
};

interface AdditionalData {
	displayName: string;
}

export const createUserProfileDocument = async (
	userAuth: User,
	additionData?: AdditionalData
): Promise<UserProfile> => {
	const docRef = doc(db, `users`, userAuth.uid);
	const docSnap = await getDoc(docRef);

	// Create new user in our database using the userAuth.uid as our document id
	if (!docSnap.exists()) {
		const createdAt = new Date();
		const usersRef = collection(db, 'users');

		try {
			await setDoc(doc(usersRef, userAuth.uid), {
				displayName: userAuth.displayName || additionData?.displayName || '',
				email: userAuth.email,
				createdAt,
				...additionData,
			});
		} catch (error: unknown) {
			error instanceof Error
				? console.log('error create user', error.message)
				: console.log(error);
		}
	}

	// Return a new user, or current existing user
	return { docRef, docSnap };
};

export class FireBase {
	app: FirebaseApp;
	db: Firestore;

	constructor(config: FireBaseConfig) {
		this.app = initializeApp(config);
		this.db = getFirestore(this.app);
	}

	/**
	 * Create a new user after Sign In
	 * @param user
	 */
	async createUserProfileDocument(
		user: User | null,
		additionData: { [key: string]: any } | {}
	) {
		if (!user) return null;

		const { uid, displayName, email } = user;

		const docRef = doc(db, `users`, uid);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) return docRef;

		const createdAt = new Date();
		const usersRef = collection(db, 'users');

		try {
			await setDoc(doc(usersRef, uid), {
				displayName,
				email,
				createdAt,
				...additionData,
			});
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.log('error creating user', error.message);
			} else {
				console.log(error);
			}
		}
		return docRef;
	}
}
