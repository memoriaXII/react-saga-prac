import React from "react"
import ReactDOM from "react-dom"
import App from "../src/components/App"
import reportWebVitals from "./reportWebVitals"
import axios from "axios"
import reducers from "./reducers"
import rootSaga from "./sagas"
import createSagaMiddleware from "redux-saga"
//proivder not from redux

import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"

const sagaMiddleware = createSagaMiddleware()

axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://rem-rest-api.herokuapp.com/api"

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
