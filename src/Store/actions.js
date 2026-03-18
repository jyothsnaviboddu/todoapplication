import { ADD, DEC, INC ,RES,DEL} from "./actiontypes"

export function incAction()
{
    return {type:INC}
}
export function decAction()
{
    return {type:DEC}
}
export function resetAction()
{
    return {type:RES}
}
export function Addtodo(todo)
{
        return{
            
                type:ADD,
                payload:todo
            
        }
}
export function DeleteTodo(i)
{
    return {
        type:DEL,
        payload:i
    }
}