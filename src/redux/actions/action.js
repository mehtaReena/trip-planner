import { FETCH_PlACES_INPROGRESS, FETCH_PLACES_SUCCESS, FETCH_PLACES_ERROR ,GET_USER ,SET_USER ,UPDATE_ADDED_PLACE
,FETCH_TRIPS_INPROGRESS,
FETCH_TRIPS_SUCCESS,
FETCH_TRIPS_ERROR


} from './action.types'
import {database} from "../../firebase-config";

// const database = app.database();


const API_KEY = 'pk.eyJ1IjoicmVlbmFtZWh0YSIsImEiOiJja3BqaW10ajgwY3I4Mm5sZzgxY3JkZGU5In0.QBI4iVqDCTQDRf8czeTJ-g'



export let setUser = (name, email, image) => ({
    type: SET_USER,
    payload: { name: name, email: email, image: image }
})

export let getUser = () => ({
    type: GET_USER
})
export const updateAddedPlaces = (place) => ({
    type: UPDATE_ADDED_PLACE,
    payload: place
});



export const fetchPlaceInprogress = () => ({
    type: FETCH_PlACES_INPROGRESS
});

export const fetchplaceSuccess = (data) => ({
    type: FETCH_PLACES_SUCCESS,
    payload: data
});

export const fetchPlaceError = (error) => ({
    type: FETCH_PLACES_ERROR,
    error: error
});

export const fetchTripInprogress = () => ({
    type: FETCH_TRIPS_INPROGRESS
});

export const fetchTripSuccess = (data) => ({
    type: FETCH_TRIPS_SUCCESS,
    payload: data
});

export const fetchTripError = (error) => ({
    type: FETCH_TRIPS_ERROR,
    error: error
});








export const fetchPlaces = (place) => {

    return async function(dispatch) {
        try {
            dispatch(fetchPlaceInprogress());

            const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place.replaceAll(' ', '%20')}.json?autocomplete=true&access_token=${API_KEY}`;
            const response = await fetch(url);
            const  data = await response.json();

            if(data) {
                const places = data.features.map(place => place.place_name);
                dispatch(fetchplaceSuccess(places));
            }
        }catch(err) {
            console.error(err.message);
            dispatch(fetchPlaceError());
        }
    }

}
export const updateTripDetails = (tripDetails) => {
    return async function(dispatch) {
        console.log("tripDetails  ", tripDetails)

        try {
            database.collection("trips").add(

                tripDetails)
        } catch (error) {
            console.error(error);
        }

    }
}


export const fetchTrips = () => {
    console.log(" fetchTrips")
    return async function(dispatch) {
        try {
            dispatch(fetchTripInprogress());
            let getRequest = await database.collection('trips').get();
            let data = [];
            getRequest.docs.forEach((doc) =>
                data.push(doc.data()));
            if(data) {
                   console.log("data " , data)
                dispatch(fetchTripSuccess(data));
            }
        }catch(err) {
            console.error(err.message);
            dispatch(fetchTripError());
        }
    }

}

