// @flow
import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import smoothscroll from 'smoothscroll-polyfill';

import { createBrowserHistory } from "history";
import { Router, BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";

import * as serviceWorker from "./serviceWorker";
import reducer from "./stores/reducers/";
import storage from "redux-persist/lib/storage";
import Alert from "react-s-alert";
import IndexRouter from "./routes/index";
import DetectOffline from "./components/detectOffline";

import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/stackslide.css";
import "./assets/scss/style.css";

smoothscroll.polyfill();

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, reducer);

export const history = createBrowserHistory();
let store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
let persistor = persistStore(store);

const App = () => (
	<Provider store={store}>
		<DetectOffline />
		<Alert stack={{ limit: 3 }} timeout={5000} />
		<PersistGate loading={null} persistor={persistor}>
			<Router history={history}>
				<IndexRouter />
			</Router>
		</PersistGate>
	</Provider>
);

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root"),
);
serviceWorker.unregister();
