import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips,fetchTripSuccess, fetchTripInprogress} from '../redux/actions/action';
import { useHistory } from 'react-router';
import {database} from "../firebase-config";
import TripCard from './TripCard';
function UserProfile(props) {

    let history = useHistory()
    let user = useSelector(state => state.user)
    let dispatch = useDispatch();
    const { trips, loading, error } = useSelector((state) => state.trips);
    console.log("UserProfile  " , trips)




    function clickHandler(){

        history.push({
            pathname: '/trip',
            state: user
        });

    }

    // const [blogs,setBlogs]=useState([])
    useEffect(() => {
        console.log("Inside Use Effect")
        dispatch(fetchTrips())
        // eslint-disable-next-line
    }, []);





    return (
        <div className ='profile-container'>
            <div className='profile'>
               <div className='profile-pic'><img src = {user.image} alt =''/>
               </div>
               <div >
                   <p> {user.name}</p>
               </div>
               <h1>My Trips</h1>
               <table className="data">
                    <tr>
                        <th>Place</th>
                        <th>Start-Date</th>
                        <th>End-Date</th>
                        <th>Description</th>

                    </tr>
                    <tbody>
               {loading ? (
                    <h1>Loading . . .</h1>
                ) : (

                    <>

                          {trips.map((item)=>
                             <TripCard
                             place={item.places}
                             start={item.startDate}
                             end={item.endDate}
                             description={item.description}

                             />


                          )}
                            </>

               )}
               </tbody>
               </table>
               <div>
               <button className='planTrip' onClick={clickHandler}> <span>Plan Trip</span> </button>
               </div>
</div>




        </div>
    );
}

export default UserProfile;