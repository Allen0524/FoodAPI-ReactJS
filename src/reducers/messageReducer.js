import {GETDATA} from '../actions/actionTypes'

const initialState = {
    data:[],
    loading: false
}

const messageReducer = (state=initialState, action) => {
    switch(action.type){
        case GETDATA:
        return{
            data: action.payload.data,
            loading:true
        }
        break;
        default:
            return state
    }
}

export {messageReducer}