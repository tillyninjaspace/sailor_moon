import axios from "axios";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./index";

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios
      .get(
        "https://api.jikan.moe/v3/search/anime?q=sailormoon&limit=17"
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}

// "https://api.jikan.moe/v3/search/anime?q=sailormoon&type=tv&limit=6"