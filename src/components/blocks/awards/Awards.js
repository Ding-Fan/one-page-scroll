import React from "react";
import MovieThumbnail from "~/src/components/blocks/awards/components/MovieThumbnail.js";
import MovieInformation from "~/src/components/blocks/awards/components/MovieInformation.js";
export default function Awards({
  index,
  header,
  position,
  rankList,
  firstPlace,
}) {
  function getResult() {
    let result = rankList.map((movie, index) => {
      return <MovieThumbnail key={index} movie={movie} />;
    });

    return result;
  }
  return (
    <div data-trigger='awards' data-index={index} className='block awards'>
      <MovieInformation
        position={position}
        header={header}
        firstPlace={firstPlace}
      />
      <div className='rest-movies'>{getResult()}</div>
    </div>
  );
}
