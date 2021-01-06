export const increment = () => {
    return {
        type: 'INCREMENT'
    }
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
};

//thunk
export function fetchDataRequest() {
    return {
      type: 'FETCH_DATA_REQUEST'
    };
  }
  
  export function fetchDataSuccess(item) {
    return {
      type: 'FETCH_DATA_SUCCESS',
      item
    };
  }
  
  export function fetchDataError(error) {
    return {
      type: 'FETCH_DATA_ERROR',
      payload: { error }
    };
  }

//end of thunk