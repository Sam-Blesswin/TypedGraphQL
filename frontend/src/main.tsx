import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(), //cache query results after fetching them.
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

//You connect Apollo Client to React with the ApolloProvider component.
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
