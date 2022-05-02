// v9
import { getApps, getApp, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../../env';

const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// firebaseのDB設定
export const db = getFirestore(firebaseApp);
// ログインユーザの特定
const userInfo = '3GjGccgtRbGNzLD0nIGo';
// 編集コレクションパスの指定
export const cardDocInfo = `users/${userInfo}/cards`;
