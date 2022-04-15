import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";

ReactDOM.render(
  // our application will have access to the data that we pass to
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </TransactionsProvider>,
  document.getElementById("root")
);
