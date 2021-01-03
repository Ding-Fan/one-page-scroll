import React from "react";

export default function Shot({ index, showImage, quote, source, sourceLink }) {
  function onClick(newPage) {
    window.open(newPage, "_blank");
  }
  return (
    <div data-trigger="shot" data-index={index} className="block shot">
      <div className="picture">
        <img src={showImage} alt="the picture" />
      </div>
      <div className="quote-container">
        <div className="quote">{quote}</div>
        <div className="source" onClick={() => onClick(sourceLink)}>
          {source}
        </div>
      </div>
    </div>
  );
}
