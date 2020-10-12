import React from "react";

export default function Button({ text, link }) {
  function onClick(newPage) {
    window.open(newPage, "_blank");
  }
  return (
    <div className='button' onClick={() => onClick(link)}>
      {text}
    </div>
  );
}
