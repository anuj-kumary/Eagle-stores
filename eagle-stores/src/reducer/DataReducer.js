import { ACTION_TYPE } from "../utils/actionType";

export const initialistate = {
    products: []
};

export const DataReducer = (state , action) => {
    switch(action.type){
        case ACTION_TYPE.INITIALIZE_PRODUCTS:
            return{
                ...state,
                products:action.payload,
            }
            default:
                return state;
    }
}