import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PageErreur } from "./PageErreur.jsx";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Article from "./Article.jsx";
import { Contact } from "./Contact.jsx";
import { Emploie } from "./emploi.jsx";
import { Erreur404 } from "./Erreur404.jsx";
import Protege from "./Protege.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageErreur />,
  },
  {
    path: "/apropos",
    element: (
      <Protege estConnete={true}>
        <h1>A propos de Nous</h1>
        <div>
          <Link to="/apropos/contact">contact</Link>
          <br />
          <Link to="/apropos/emploie">Emploie</Link>
        </div>
        <div>
          <div>
            <Outlet />
          </div>
        </div>
      </Protege>
    ),
    children: [
      {
        path: "/apropos/contact",
        element: <Contact />,
      },
      {
        path: "/apropos/emploie",
        element: <Emploie estConnecte={true} />,
      },
    ],
  },
  {
    path: "/blog",
    element: (
      <Protege estConnete={true}>
        <Contact />
      </Protege>
    ),
  },
  {
    path: "/blog/:id",
    element: <Article />,
  },
  {
    path: "*",
    element: <Erreur404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
