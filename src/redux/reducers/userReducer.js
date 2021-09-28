import { GET_USER, SET_USER } from '../actions/action.types';

export default function userReducer(state = { name: '', email: '', image: '' }, action) {
    switch (action.type) {
        case GET_USER:
            return state;
        case SET_USER:
            return { name: action.payload.name, email: action.payload.email, image: action.payload.image }
        default:
            return state;
    }
}