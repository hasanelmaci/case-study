import { GET_TASKS,GET_TASKS_SUCCESS,GET_TASKS_FAILED } from "./taskTypes";

const initialState = {
    isLoading:false,
    tasks:[],
    error:null
}

export default(state = initialState, action) => {
    switch(action.type){
        case GET_TASKS:
            return{
                ...state,
                isLoading:true,
            }
        case GET_TASKS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                tasks:action.payload
            }
        case GET_TASKS_FAILED:
            return{
                error:action.payload
            }
        default:
            return state    
    }
}