import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import "popper.js"
import "./styles/bootstrap4/bootstrap.min.css"
import "./plugins/font-awesome-4.7.0/css/font-awesome.min.css"
import "./plugins/OwlCarousel2-2.2.1/owl.carousel.css"
import "./plugins/OwlCarousel2-2.2.1/owl.theme.default.css"
import "./plugins/OwlCarousel2-2.2.1/animate.css"
import "./styles/bootstrap4/bootstrap.min.js"
// import "./plugins/scrollmagic/ScrollMagic.min.js"
// import "./plugins/greensock/ScrollToPlugin.min.js"
import "./plugins/easing/easing.js"
// import "./plugins/parallax-js-master/parallax.min.js"
// import "./js/custom.js"
let store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  )
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
