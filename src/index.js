import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
const httpLink = createHttpLink({
  uri: "https://apinft.etabibo.info/graphql",
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEyNDk0ZmYxZGQwYWRkZDJiMTczYWQiLCJhY2NvdW50VHlwZUNvZGUiOiJVU0VSIiwiaWF0IjoxNjYyNTQ3OTEyLCJleHAiOjE2NjM0MTE5MTIsInN1YiI6IjYzMTI0OTRmZjFkZDBhZGRkMmIxNzNhZCJ9.P85ZNyVHYzDEdjpFnWw-1o5r7mSDIf_7uKlgcieCvF6REBt7gRxlD8cS6urx4CJX9IlVzlbLKQ4revxS1FnUh52JQKNKMStmfvMLYvHrYhelIFHWvaQ78-Vx79WWw4iVX55NYtTG0-Ns8LEFXb-ChEpAukNEdFrgcOwwPi2V_gbrJcFD-ofDgFEtcLCvOfbq1d6motmbnnFGxjkrkiISQlR7PD_g3jF_cXizGJdQU-FJcbG1QO1T-A9SpK8esRviZn0nb7-K9slSkl4CKrEcu6fzRYys7r951BacJUYrqb1NsPRsRtWgcNhTAso8NI1PNUUVN9el71BRTqff2B-H5W7048oKBHU_Aru7Oqo3zURlU0FBxKGgGhNi_PTPqwJbLEyaE0duGwSIeUWLgnHnKTB3OMdsNY73ncqv3NbAayIiTtEEcleRB4OXOTN3_G_lm_ciry4pikyjwa0qqUTOtiZCgwxigGzjghOV_Uih1-Hf4SQclauqbTbvkpZiRlxa5qMhp4DN6WJarMdi6lLyHSdl-zAz01TXIJ81FhT-R0bOI4PJKKWHmUszLeWkNzYYHHDze_lVnH4KeXnZLeAfByfGTKl4eOrbE9EBHXkSW6-xwmwqd0viG05RagBeDmxn-hAp0aEXB9091jh26triODZX0OXQXiYhli9S4DhqFaU",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
