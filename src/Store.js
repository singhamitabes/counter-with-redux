import { createStore } from "redux";
import rootReducer from "./Reducers/rootreducer";

const store = createStore(rootReducer)

export default store;