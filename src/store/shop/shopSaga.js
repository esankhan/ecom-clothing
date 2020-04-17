import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shopTypes";
import {
  firestore,
  convertCollectionSnapshotToObject,
} from "../../firebase/firebase-utils";

import { fetchCollectionFailure, fetchCollectionSuccess } from "./shopActions";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collection");
    const snapshot = yield collectionRef.get();
    const collectionObject = yield call(
      convertCollectionSnapshotToObject,
      snapshot
    );
    yield put(fetchCollectionSuccess(collectionObject));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
