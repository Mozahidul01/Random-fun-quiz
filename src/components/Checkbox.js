import React from "react";

export default function Checkbox({ className, type, id, text }) {
  return (
    <label className={className} htmlFor={id}>
      <input type={type} id={id} />
      <span>{text}</span>
    </label>
  );
}
