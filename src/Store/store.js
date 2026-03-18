import { createStore,combineReducers } from "redux"
import counterReducer from './counterReducer'
import todolistReducer from './todolistReducer'
const store=createStore(combineReducers({countR:counterReducer,todolistR:todolistReducer}),)
export default store;