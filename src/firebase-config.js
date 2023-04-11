import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyApPAhUwEW62ZrvCu3R1iRu-6MLpBzCn24',
  authDomain: 'ecommerce-fb-86919.firebaseapp.com',
  projectId: 'ecommerce-fb-86919',
  storageBucket: 'ecommerce-fb-86919.appspot.com',
  messagingSenderId: '196916106302',
  appId: '1:196916106302:web:c9bed6b7022b547bf7ad6f',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
