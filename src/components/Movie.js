import React, { useState } from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  const [readMore, readHandler] = useState(true);
  const[readValue, valueUpdate] = useState(props.openingText.slice(0,250)+'...');

  const clickHandler = () => {
    if(readMore){
      readHandler(false);
      valueUpdate(props.openingText);
    }
    else{
      readHandler(true);
      valueUpdate(props.openingText.slice(0,250)+'...');
    }
  }

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{readValue}</p>
      <a onClick={clickHandler}>{readMore ? 'Read More' : 'Show less'}</a>
    </li>
  );
};

export default Movie;
