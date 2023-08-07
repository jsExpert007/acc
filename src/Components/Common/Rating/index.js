import React from 'react';
import './style.scss';
// import StarRatings from 'react-star-ratings';
import { StarSVGViewBox, StarSVGIconPath } from '../../../Constant';

export default function Rating({
  className = '', rating
}) {

  return (
    <div className={`rating-component ${className}`}>
      {/* <StarRatings
        rating={rating}
        starDimension="20px"
        starSpacing="2.14px"
        starRatedColor="#FBA92E"
        starEmptyColor="rgba(48, 42, 50, 0.1)"
        svgIconViewBox={StarSVGViewBox}
        svgIconPath={StarSVGIconPath}
      /> */}
    </div>
  );
}