import * as React from "react";
import ReactDOM from "react-dom/client";
import PortafolioApp from "./PortafolioApp.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter } from "react-router-dom";
import { Description } from "./pages/Description.jsx";
import { RouterProvider } from "react-router";
import { Contact } from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
      path: '/',
      element: <PortafolioApp />,
  },
  {
    path: 'description',
    element: <Description />,
  },
  {
    path: 'contact',
    element: <Contact/>,
  },
])


ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
     <RouterProvider router={router}/>,
   </React.StrictMode>
);
