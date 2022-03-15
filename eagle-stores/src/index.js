import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from "./server";
import { DataProvider } from "./context/data/data-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  
  <DataProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </DataProvider>

  </React.StrictMode>,
  document.getElementById("root")
);
