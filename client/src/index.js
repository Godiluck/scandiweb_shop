import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {ApolloProvider} from "@apollo/client";
import {client} from "./apollo/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
  </Provider>
);
