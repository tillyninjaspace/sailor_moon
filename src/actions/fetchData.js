import axios from "axios";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./index";

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios
      .get(
        "https://api.jikan.moe/v4/anime?q=sailor%20moon&sfw"
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}