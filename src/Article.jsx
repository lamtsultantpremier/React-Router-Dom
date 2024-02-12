import React from "react";
import { useParams } from "react-router-dom";
export default function Article() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1> Voici un article:{id}</h1>
    </div>
  );
}
