import axios from "axios";
import { setErrorMessage } from "../stores/actions/alertAction";
import { get } from "lodash";

export const apiUrl = "https://api-sandbox.triplogic.co.id/services/api/v3";
// let apiUrl = `${"https://cors-anywhere.triplogic.io:8080/"}https://api-sandbox.triplogic.co.id/services/api/v3`;

const appHeaderProperties = {
	// "Content-Type" : "application/json",
};

export const apiCall = ({ method, url, data = "" }) => async (dispatch) => {
	try {
		const response = await axios({
			method: method,
			url: apiUrl + url,
			data: data.data || "",
			headers: { ...data.headers, ...appHeaderProperties } || "",
			params: data.params || "",
			timeout: data.timeout || 0,
		});
		return response.data;
	} catch (error) {
		if (error.response) {
			const { data } = error.response;
			if (data.status !== 400) {
				if (get(data, "status")) {
					dispatch(setErrorMessage(get(data, "message")));
				} else {
					dispatch(
						setErrorMessage("Maaf sedang terjadi masalah dengan server kami. Mohon tunggu beberapa menit lagi 🙏"),
					);
				}
				return data;
			}
			return data;
		} else {
			dispatch(setErrorMessage("Maaf sedang terjadi masalah dengan server kami. Mohon tunggu beberapa menit lagi 🙏"));
		}
		return null;
	}
};
