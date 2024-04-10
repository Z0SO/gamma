import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

// para crear las variables hacmos una constante store que viene de createStore

const store = createStore(
  rootReducer,
  initialState,
  //   applyMiddleware(...middleware),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
