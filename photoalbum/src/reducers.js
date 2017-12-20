import { combineReducers } from 'redux'

function countAge(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const initialState = {isRejected: true, data:null}
function users(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_USERS_PENDING':
        return{
            isRejected:false,
            data:null
        }
        case 'LOAD_USERS_FULFILLED':
            return{
                isRejected:false,
                data:action.payload
            }
        case 'LOAD_USERS_REJECTED':
            return{
                isRejected:true,
                data:null
            }
            default:
            return state
    }
}

const reducers = combineReducers({
    counter: countAge,
    users
})

export default reducers