import { MODAL_SHOW } from "../constants";

export const modalToggle = (bool = false, body = "", title='') => async (dispatch) => {
	dispatch({
		type: MODAL_SHOW,
		payload: { bool, body, title },
	});
};
