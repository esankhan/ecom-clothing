import shopActionTypes from "./shopTypes";
import {
  firestore,
  convertCollectionSnapshotToObject,
} from "../../firebase/firebase-utils";

export const fetchCollectionStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collection");
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then(async (snapshot) => {
        const collectionObject = convertCollectionSnapshotToObject(snapshot);
        console.log(collectionObject);
        dispatch(fetchCollectionSuccess(collectionObject));
      })
      .catch((error) => dispatch(fetchCollectionFailure(error.message)));
  };
};
