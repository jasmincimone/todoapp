//STEP ONE - EXPORT our CONSTANT VARIABLES

export const CREATE_TODO = "ADD_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const DELETE_TODO = "DELETE_TODO"

//STEP TWO - CREATE ACTIONS

export const createTodo = (body) => (dispatch) => {
    console.log(body);
    dispatch({type: CREATE_TODO, payload: body})
};

export const updateTodo = (body) => (dispatch) => {
    dispatch({type: UPDATE_TODO, payload: body})
};

export const deleteTodo = (id) => (dispatch) => {
    dispatch({type: DELETE_TODO, payload: id})
};