import React from "react";

export default function StudentCard({ name, course, onDelete }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h2>{name}</h2>
      <p>{course}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
