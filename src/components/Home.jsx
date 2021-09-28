import firebase from 'firebase'
import { useState } from 'react';


import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { database } from '../firebase-config'
import { setUser } from '../redux/actions/action';
import SignIn from '../signin';

export default function Home() {
    let [disabled, setDisabled] = useState(false)
    let history = useHistory()
    let dispatch = useDispatch()

    firebase.auth().onAuthStateChanged(function(user){
        if(!user){
            history.push('/')
        }
        else{
            let currentUser = firebase.auth().currentUser
            dispatch(setUser(currentUser.displayName, currentUser.email, currentUser.photoURL))
            history.push('/profile')
        }
    })

    let loginHandler = async () => {
        setDisabled(true)
        try {
            let user = await SignIn()
            updateDatabase(user)
            history.push('/profile')
        }
        catch (error) {
            // alert(error.code + ' ' + error.message)
            setDisabled(false)
        };
    }
    function getUserId(email) {
        return email.replaceAll('.', '_')
    }
    function updateDatabase(user) {
        let userId = getUserId(user.email)
        database.ref('users/' + userId).set({
            username: user.displayName,
            email: user.email,
            profile_picture: user.photoURL
        });
        dispatch(setUser(user.displayName, user.email, user.photoURL))
        setDisabled(false)
    }
    return (
        <div className="home">
            {/* <h1 className = 'app-name'>ChatterBox</h1> */}
            {/* <button className="login" disabled={disabled} onClick={loginHandler}></button> */}
        </div>
    )
}