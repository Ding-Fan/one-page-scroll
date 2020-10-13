import React from "react";

export default function Cover({ index }) {
  return (
    <div data-trigger='cover' data-index={index} className='block cover'>
      <div className='picture'>
        <img
          src={require("~/src/attachments/images/p1489.jpg")}
          alt='picture'
        />
      </div>
      <div className='description'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
        aspernatur.
      </div>
    </div>
  );
}
