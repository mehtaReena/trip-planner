import React, { useRef } from 'react';
import { useLocation } from "react-router";
import Place from './Place'
import '../styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaces, updateAddedPlaces, updateTripDetails } from '../redux/actions/action';
import { useState } from 'react';
import { useHistory } from 'react-router';

function TripForm(props) {
    const location = useLocation();
    let [selectedOption, setSelectedOption] = useState("");
    let [place ,setPlace]=useState("")
    const userDetail = location.state;
    let history = useHistory();
    console.log(userDetail)
    let dispatch = useDispatch()
    const { places, addedPlaces, error } = useSelector((state) => state.places);

    const inputRef = useRef({});


    const changehandler = () => {
        dispatch(fetchPlaces(inputRef.current["search"].value));
    };

    const clickhandler = (e ,idx) => {
         console.log(e.target.value)
         setPlace(e.target.value)
        setSelectedOption(idx)


    };

    const addTrip = () => {
        const tripdetail = {
            title: inputRef.current["title"].value,
            description: inputRef.current["description"].value,
            status: inputRef.current["status"].value,
            startDate: inputRef.current["startDate"].value,
            endDate: inputRef.current["endDate"].value,
            places:place
        };
        console.log("trip", tripdetail)

        dispatch(updateTripDetails(tripdetail));
          history.push("/profile")

    }

    const goHome = () => {
        history.push("/")
    }


    return (
        <div className='form-container'>
            {/* <button className="home" onClick={goHome}> Home </button> */}
            <div className="trip">
            <div className="form-header">
                <h2 style={{color:"white"}}>Plan Your Trip</h2>
            </div>
                <div className="formControl">
                    <label >Trip Title : </label>
                    <input type="text" name="title"
                        ref={(el) => (inputRef.current["title"] = el)} />
                </div>
                <div className="formControl">
                    <label >Description :</label>
                    <textarea type="text" name="description"
                        ref={(el) => (inputRef.current["description"] = el)}
                        rows="3" cols="40" />
                </div>
                <div className="formControl">
                    <label >Departure  :</label>
                    <input type="date" name="startDate"
                        ref={(el) => (inputRef.current["startDate"] = el)} />
                    <label>Return : </label>
                    <input type="date" name="endDate"
                        ref={(el) => (inputRef.current["endDate"] = el)} />

                </div>

                <div className='formControl ' id='statusOption' >
                    <div> Status  :</div>
                    <select
                        name="Status"
                        ref={(el) => (inputRef.current["status"] = el)}
                    >
                        <option value="Planning"> Planning</option>
                        <option value="Completed"> Completed</option>
                        <option value="Cancelled"> Cancelled</option>
                    </select>
                </div>

                <div >
                    <div className="formControl">🔎
                        <input type="text" id="location" name="location"
                            ref={(el) => (inputRef.current["search"] = el)}
                            placeholder="search for places"
                            onChange={changehandler}
                        ></input>
                    </div>


                    {places.map((place, idx) => (

                        <div className="radio" key={idx}>
                            <input type="radio"
                                ref={(el) => (inputRef.current["radio"] = el)}
                                checked={selectedOption === idx}
                                onClick={(e) => clickhandler(e,idx)}
                                value={place} />
                            {place}
                        </div>

                    ))}


                </div>
                <div>
                    <button className="button" onClick={addTrip}>  Make Trip </button>
                </div>





            </div>



        </div>


    );
}

export default TripForm;