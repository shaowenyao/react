import { auth } from './firebase';

//signup
export const doCreateUserWithEmailAddressAndPassword = (email,password) => 
auth.createdUserWithEmailAndPassword(email,password);

//sign in
export const doSignInWIthEmailAndPassword = (email,password) =>
auth.signInWithEmailAndPassword(email,password);

//sign out
export const doSignOut = () => auth.signOut(0);

//password reset
export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

//password change
export const doPasswordUpdate = (password) => auth.currentUser.updatePassword(password);