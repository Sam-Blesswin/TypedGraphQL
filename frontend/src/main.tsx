import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { auth } from "./firebase/firebase.ts";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
});

/*
setContext is executed before each backend request, ensuring that the 
token is dynamically set in the headers for every request
*/
const authLink = setContext(async (_, { headers }) => {
  const jwt = await auth.currentUser?.getIdToken(true);

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      token: jwt ? jwt : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

//You connect Apollo Client to React with the ApolloProvider component.
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
