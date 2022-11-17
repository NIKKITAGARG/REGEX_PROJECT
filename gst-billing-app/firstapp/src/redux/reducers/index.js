// let rootReducer = null;
// export default rootReducer = (state, action) =>{
//     let tmp = state;

//     return reducers(tmp, action);
// }


import { combineReducers } from "redux";
import userReducers from "./userReducers";
import authReducer from "./authReducer";
import poReducer from "./poReducer";

export const reducers = combineReducers({
  userReducers,
  authReducer,poReducer,
});

const rootReducer = (state, action) => {
  let tmp = state;

  return reducers(tmp, action);
};

export default rootReducer;
