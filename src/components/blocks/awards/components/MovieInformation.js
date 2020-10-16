import React from "react";
import Rater from "react-rater";

export default function MovieInformation({
  position,
  header,
  firstTitle,
  rating,
}) {
  return (
    <div className={`movie-information ${position}`}>
      <div className='section-one'>
        <h2>{header}</h2>
      </div>
      <div className='section-two'>
        <div className='box'>
          <div className='title'>
            <div className='ranking'>Top 1</div>
            <div className='text'> {firstTitle} </div>
          </div>
          <div className='rating'>
            <Rater total={5} rating={rating / 2} interactive={false} />
          </div>
          <div className='description'>
            从这个角度来看，
            这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。
            我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。
          </div>
        </div>
      </div>
    </div>
  );
}
