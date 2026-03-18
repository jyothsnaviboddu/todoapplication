//state
const intialState={
    count:0
}

//logic
 function counterReducer(state=intialState,action)
{
    if(action.type==='inc')
    {
        return {count:state.count+1}
    }
    if(action.type==='dec')
    {
        return {count:state.count-1}
    }
    if(action.type==='reset')
    {
        return {count:0}
    }
    return state
}
export default counterReducer
