
import Home from './Home'
import UserProfile from './UserProfile'
import TripForm from './TripForm'
import TripDetail from './TripDetail'
import '../styles.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";




export default function App() {
    return (
        <Router >

                <Switch >
                    <Route exact path="/" >
                        < Home />
                    </Route>
                    <Route path="/profile" >
                        <UserProfile/>
                    </Route>

                    <Route path="/trip" >
                        <TripForm/>
                    </Route>

                    <Route path="/details" >
                        <TripDetail/>
                    </Route>

                    <Route path="/404">
                        <h1>Page Not Found</h1>
                    </Route>

                    <Redirect to="/404" />
                </Switch>

        </Router>
    )
}



//pk.eyJ1IjoicmVlbmFtZWh0YSIsImEiOiJja3BqaW10ajgwY3I4Mm5sZzgxY3JkZGU5In0.QBI4iVqDCTQDRf8czeTJ-g