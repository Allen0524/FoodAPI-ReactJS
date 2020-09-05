import {GETDATA} from '../actions/actionTypes'

const initialState = {
    data:[],
}

const messageReducer = (state=initialState, action) => {
    switch(action.type){
        case GETDATA:
        {
            console.log('12345566',state)
            break;
        }
        default:
            return state
    }
}

export {messageReducer}