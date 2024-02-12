import React from "react";
import { useRouteError } from "react-router-dom";
export const PageErreur = () => {
  const erreur = useRouteError();
  return (
    <div>
      <h3>Il y'a une Erreur</h3>
      <p>{erreur.message}</p>
    </div>
  );
};
