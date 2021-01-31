import React from 'react'
import MovieThumbnail from '~/src/components/blocks/awards/components/MovieThumbnail.js'
import MovieInformation from '~/src/components/blocks/awards/components/MovieInformation.js'
export default function Awards({
  index,
  header,
  headerColor,
  position,
  rankList,
  firstPlace,
}) {
  function getResult() {
    // the last thumbnail doesn't have margin right
    const theLength = rankList.length
    let result = rankList.map((movie, index) => {
      return (
        <MovieThumbnail
          key={movie.ranking}
          movie={movie}
          theClassName={index < theLength - 1 ? '' : 'no-margin-right'}
        />
      )
    })

    return result
  }

  return (
    <div data-trigger="awards" data-index={index} className="block awards">
      <MovieInformation
        position={position}
        header={header}
        headerColor={headerColor}
        firstPlace={firstPlace}
      />
      <div className="rest-movies">
        <div className="box">{getResult()}</div>
      </div>
    </div>
  )
}
