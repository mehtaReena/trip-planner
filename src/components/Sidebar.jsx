import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function SideBar(props) {

    let history = useHistory();
    let user = useSelector(state => state.user)

    function clickHandler(){

        history.push({
            pathname: '/trip',
            state: user
        });

    }
    return (
        <div className="sidebar">

        <div className="sidebar-category">
        <button className='planTrip' onClick={clickHandler}> <span>Plan Trip</span> </button>
        </div>
        <div className="sidebar-category"><button className="categoryIcon" value="laptops" >  💻 Laptops</button></div>
        <div className="sidebar-category"><button className="categoryIcon" value="appliances" >   📸  Appliances</button></div>

    </div>
    );
}

export default SideBar;