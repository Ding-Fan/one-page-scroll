import React from 'react'

export default function MovieThumbnail({ movie, theClassName }) {
  function onClick(newPage) {
    window.open(newPage, '_blank')
  }
  return (
    <div
      className={`movie-thumbnail ${theClassName}`}
      onClick={() => onClick(movie.link)}
    >
      <div className="ranking">
        <div className="icon"></div>
        <div className="text">{movie.ranking}</div>
      </div>
      <div className="content">
        <div className="picture">
          <img src={movie.thumbnail} alt="picture" />
        </div>
        <div className="information">
          <div className="title">
            {movie.name}
            {movie.rating ? (
              <span className="rating">{movie.rating.toFixed(1)}</span>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
