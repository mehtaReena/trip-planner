import { FETCH_PLACES_SUCCESS, FETCH_PlACES_INPROGRESS, FETCH_PLACES_ERROR ,UPDATE_ADDED_PLACE} from '../actions/action.types';

let initialState = {
    loading: false,
    error: null,
    places: [],
    addedPlaces: [],
};

export default function placesDataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PlACES_INPROGRESS:
            return { ...state, loading: true };
        case FETCH_PLACES_SUCCESS:
            return { ...state, places: action.payload, loading: false , error:null};
        case FETCH_PLACES_ERROR:
            return { ...state, error: action.error };
            case UPDATE_ADDED_PLACE:
                return {...state, addedPlaces: [...state.addedPlaces, action.payload]};

            default:
                return state;
    }
}
