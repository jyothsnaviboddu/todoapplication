import { ADD, DEL } from "./actiontypes"

//state
const intialState={
    todos:["goto arunachalam",'cr tho velli appalu thinali',"goto kedharnath"]
}
//logic
function todolistReducer(state=intialState,action)
{
    if(action.type===ADD)
    {
        return {todos:[...state.todos,action.payload]}
    }
    if(action.type===DEL)
    {
        let temp=state.todos
        temp.splice(action.payload,1)
        return {todos:[...temp]}
    }
    return state
}
export default todolistReducer