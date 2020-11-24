import React from "react";

export default function Film({ image, children }) {
  // console.log(image);
  return (
    <div className="film" style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  );
}
