import { createStore, applyMiddleware, combineReducers } from "redux";
import { createEpicMiddleware } from "redux-observable";
import placesReducer from "@/redux/features/places/reducer";
import rootEpics from "./epics";

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({ places: placesReducer });

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpics);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
