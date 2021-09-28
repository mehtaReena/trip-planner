import firebase from 'firebase'
let provider = new firebase.auth.GoogleAuthProvider();

export default async function SignIn() {
    try {
        let response = await firebase.auth().signInWithPopup(provider)
        let user = await response.user
        return user
    } catch (error) {
        console.log(error.message)
        throw error.message
    }
}