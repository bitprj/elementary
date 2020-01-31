import {
    STORE_DATA
} from "./actions"

const initialState = {
    name: '',
    joinCode: 0,
}

export default function studentState(state = initialState, action) {
    switch (action.type) {
        case STORE_DATA:
            return {
                ...state,
                name: action.value.name,
                joinCode: action.value.joinCode
            }
        default:
            return state;
    }
}