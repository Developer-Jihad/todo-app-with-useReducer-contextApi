import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Conponents/App/App";
import { TodoContextProvider } from "./context/TodoContex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
