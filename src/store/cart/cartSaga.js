import { takeLatest, put, all, call } from "redux-saga/effects";
import { clearCart } from "./cartActions";
import userTypes from "../user/usertTypes";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* OnSignOutSuccess() {
  yield takeLatest(userTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(OnSignOutSuccess)]);
}
