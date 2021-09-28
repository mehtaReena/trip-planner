import firebase from './config'

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {

  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user.email)
  }).catch((error) => {
    console.log(error.message)
  })
}