import { SELECTED_DATA } from "./actions";

export const selectedPOAction = (data) => (Dispatch) => {
    console.log("dispatched selected data",data);
  Dispatch({
    type: SELECTED_DATA,
    payload: { data },
  });
};
