import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/userSaga";
import { cartSagas } from "./cart/cartSaga";
import { shopSagas } from "./shop/shopSaga";
export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
