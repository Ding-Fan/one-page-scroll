import React from "react";
import MovieThumbnail from "~/src/components/blocks/awards/components/MovieThumbnail.js";
import MovieInformation from "~/src/components/blocks/awards/components/MovieInformation.js";
export default function Awards({ index, header, position, firstTitle }) {
  return (
    <div data-trigger='awards' data-index={index} className='block awards'>
      <MovieInformation
        position={position}
        header={header}
        firstTitle={firstTitle}
      />
      <div className='rest-movies'>
        <MovieThumbnail />
        <MovieThumbnail />
        <MovieThumbnail />
        <MovieThumbnail />
        <MovieThumbnail />
      </div>
    </div>
  );
}
