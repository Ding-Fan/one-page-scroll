import React from "react";

export default function MovieThumbnail() {
  return (
    <div className='movie-thumbnail'>
      <div className='ranking'>
        <div className='icon'></div>
        <div className='text'>2</div>
      </div>
      <div className='content'>
        <div className='picture'>
          <img
            src={require("~/src/attachments/images/never7.jpg")}
            alt='picture'
          />
        </div>
        <div className='information'>
          <div className='title'>
            所谓喝水，关键
            <span className='rating'>8.4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
