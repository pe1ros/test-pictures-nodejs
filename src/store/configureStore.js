import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { watchGetData } from "../sagas/getDataSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watchGetData);
