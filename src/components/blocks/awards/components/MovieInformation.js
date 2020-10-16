import React from "react";
import Rater from "react-rater";

export default function MovieInformation({ position, header, firstPlace }) {
  return (
    <div className={`movie-information ${position}`}>
      <div className='section-one'>
        <h2>{header}</h2>
      </div>
      <div className='section-two'>
        <div className='box'>
          <div className='title'>
            {/* <div className='ranking'>Top 1</div> */}
            <div className='name'> {firstPlace.name} </div>
            <div className='original-name'> {firstPlace.originalName} </div>
          </div>
          <div className='rating'>
            <Rater
              total={5}
              rating={firstPlace.rating / 2}
              interactive={false}
            />
            <div className='score'>{firstPlace.rating}</div>
            <div className='people'>{firstPlace.people}人评价</div>
          </div>
          <div className='description'>
            <div className='text'>{firstPlace.description}</div>
            <div className='source'>{firstPlace.source}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
