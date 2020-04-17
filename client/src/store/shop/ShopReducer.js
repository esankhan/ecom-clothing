import shopActionTypes from "./shopTypes";

const INITIAL_STATE = {
  collection: null,
  isFetching: false,
  errorMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collection: action.payload,
      };
    case shopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
