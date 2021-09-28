import { FETCH_TRIPS_SUCCESS, FETCH_TRIPS_INPROGRESS, FETCH_TRIPS_ERROR } from '../actions/action.types';

let initialState = {
    loading: false,
    error: null,
    trips: [],

};

export default function tripsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TRIPS_INPROGRESS:
            return { ...state, loading: true };
        case FETCH_TRIPS_SUCCESS:
            console.log("tripReduser   sucesssss.."  ,  action.payload)
            return { ...state, trips: action.payload, loading: false, error: null };
        case FETCH_TRIPS_ERROR:
            return { ...state, error: action.error };

        default:
            return state;
    }
}
