import { ADD_USER_DATA } from "./actions";

export const addUserInfo = (data) => (Dispatch) => {
  Dispatch({
    type: ADD_USER_DATA,
    payload: { data },
  });
};