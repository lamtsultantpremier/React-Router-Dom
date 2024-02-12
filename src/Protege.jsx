import React from "react";
import { Navigate } from "react-router-dom";

export default function Protege({ estConnete, children }) {
  if (!estConnete) return <Navigate to="/" />;
  return <div>{children}</div>;
}
