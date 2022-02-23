//GENERAL NOTE: 

// * IF YOU ARE WORKING WITH A LOT OF STATE ...
// * MAKE SEPARATE REDUCERS!!!!!!

//STEP ONE: IMPORT ACTIONS

import {CREATE_TODO, UPDATE_TODO, DELETE_TODO} from '../actions'

//CREATE INITIAL STATE

const initialState = {
    TODO: [
        {
            id: 0,
            task: "LEARN REDUX",
            completed: false
        }
    ]
}

function reducer(state = initialState, action){
    switch(action.type){
        case CREATE_TODO:
            console.log(action.payload);
            return{
                ...state, 
                TODO: [...state.TODO, action.payload]
            }
        case UPDATE_TODO:
            return{
                ...state.TODO[action.payload.id] = action.payload
            }
        case DELETE_TODO: 
            let newState = state.TODO.filter(task => task.id === action.payload)
            return{
                ...state.TODO = newState
            }
        default: return state;
    }
}

export default reducer;