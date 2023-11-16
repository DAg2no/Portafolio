import * as React from "react";
import ReactDOM from "react-dom/client";
import PortafolioApp from "./PortafolioApp.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
/* import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { Description } from "./pages/Description.jsx";
import { Contact } from "./pages/Contact.jsx";

 */




/* const router = createBrowserRouter([
  {
    path: "/",
    element: <PortafolioApp/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/description",
    element: <Description />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage/>,
  },
]) */

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
     {/* <RouterProvider router={router}/> */}

     <PortafolioApp/>
   </React.StrictMode>
);
