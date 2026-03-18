import { DEC, INC, RES } from "./actiontypes"

//state
const intialState={
    count:0
}

//logic
 function counterReducer(state=intialState,action)
{
    if(action.type===INC)
    {
        return {count:state.count+1}
    }
    if(action.type===DEC)
    {
        return {count:state.count-1}
    }
    if(action.type===RES)
    {
        return {count:0}
    }
    return state
}
export default counterReducer
