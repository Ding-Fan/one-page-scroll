import React from "react";

export default function Shot({ index, showImage, quote, source }) {
  return (
    <div data-trigger='shot' data-index={index} className='block shot'>
      <div className='picture'>
        <img src={showImage} alt='yuka' />
      </div>
      <div className='quote'>{quote}</div>
      <div className='source'>{source}</div>
    </div>
  );
}
