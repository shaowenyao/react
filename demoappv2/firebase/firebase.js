import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyADMIX_r41ueY_LF73IfFvPrpf-1Dxuifs",
    authDomain: "appv2-ecc6a.firebaseapp.com",
    databaseURL: "https://appv2-ecc6a.firebaseio.com",
    projectId: "appv2-ecc6a",
    storageBucket: "appv2-ecc6a.appspot.com",
    messagingSenderId: "133269530925"
  };

 if (!firebase.apps.length) {
 	firebase.initalizeApp(config);
 }

 const auth=firebase.auth();

 export {
 	auth,
 };