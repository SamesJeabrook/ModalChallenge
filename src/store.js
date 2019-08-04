import { createStore } from "redux";
import rootReducers from "./reducer/root-reducers";


export default function configureStore(){

    return createStore(
        rootReducers
    )

}