import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import * as serviceWorker from "./serviceWorker";
import client from "./apollo";

const theme = {};

const GlobalStyle = createGlobalStyle`
    *,*::before , *::after{
        margin:0;
        padding:0;
        box-sizing:inherit;
    }
   body{
    box-sizing:border-box;
   }
    html{

    }
`;

const app = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </ApolloProvider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
