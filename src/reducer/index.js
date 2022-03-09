const initialState = {
    activities: [],
    activitiesMonth: []
}


function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_ACTIVITIES':
            return{
                ...state,
                activities: action.payload
            }
        case 'GET_ACTIVITIES_MONTH':
            return{
                ...state,
                activitiesMonth: action.payload
            }
        default:
            return state
    }
}   

export default rootReducer;