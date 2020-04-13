import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";
if (process.env.NODE_ENV === "development") {
  const middleware = [logger];
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);
