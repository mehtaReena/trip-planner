import { useDispatch, useSelector } from "react-redux"
import firebase from 'firebase'
import { setUser } from "../redux/actions/action"
import SignIn from "../signin"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"


export default function Header(){
    let [disabled, setDisabled] = useState(false)
    let history = useHistory();
    let user = useSelector(state => state.user)
    let dispatch = useDispatch()
    let headerLoginHandler = (e) => {
        setDisabled(true)
        if(e.target.innerText === 'Logout'){
            logOut()
        }
        else{
            setDisabled(true)
            logIn()

        }
    }
    console.log('rendered ', user)
    useEffect(() => {
        setDisabled(true)
        console.log('useeffect called')
        let user = firebase.auth().currentUser
        if(user){
            setDisabled(true)
            dispatch(setUser(user.displayName, user.email, user.photoURL))
        }
        // eslint-disable-next-line
    },[])
    async function logIn(){
        try{
            setDisabled(true)
        let user = await SignIn()
        dispatch(setUser(user.displayName, user.email, user.photoURL))
        }
        catch(error){
            // alert(error.message)
            setDisabled(false)
        }

    }

    function logOut(){
        firebase.auth().signOut().then(() => {
            // alert('Signed Out Successfully')
            dispatch(setUser('','',''))
            history.push('/')

          }).catch((error) => {
            setDisabled(false)
            // alert(error.id + ' ' + error.message)
          });
    }

    const goHome=() =>{
        history.push('/profile')
    }

    return(
        <div className="header">
            <h1 className = 'app-name' onClick={goHome}>Trip Planner</h1>
            <div className = 'user-display'>
            {user.name.length>0 && <div className = 'welcome'><h3>Hi, <span>{user.name.split(' ')[0]}</span></h3><img src = {user.image} alt =''/></div>}
            <p className = 'login'  disabled={disabled} onClick = {headerLoginHandler}>{user.name===''?'Login':'Logout'}</p></div>
        </div>
    )
}