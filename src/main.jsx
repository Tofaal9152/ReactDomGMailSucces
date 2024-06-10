import React from "react";
// Css
import "./index.css";
//react_router_Dom
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// redux
import { Provider } from "react-redux";
import store from "./redux/store.js";
// components
import App from "./App.jsx";
import Mail_Read from "./Components/Shared/Mail_Read.jsx";
import Mails from "./Components/Shared/Mails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Mails />,
      },
      {
        path: "/mail/:id",
        element: <Mail_Read />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
