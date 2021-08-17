import React, { useState, useRef } from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  const [readMore, readHandler] = useState(true);
  const[readValue, valueUpdate] = useState(props.openingText.slice(0,250)+'...');
  const itemsRef = useRef();

  // useEffect(() => {
  //   itemsRef.current = itemsRef.current.slice(0, props.items.length);
  // }, [props.items]);

  const clickHandler = () => {
    if(readMore){
      readHandler(false);
      valueUpdate(props.openingText);
      itemsRef.current.scrollIntoView();    
    }
    else{
      readHandler(true);
      valueUpdate(props.openingText.slice(0,250)+'...');
      itemsRef.current.scrollIntoView();    
    }
  }

  return (
    <li className={classes.movie} ref={itemsRef}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{readValue}</p>
      <a onClick={clickHandler}>{readMore ? 'Read More' : 'Show less'}</a>
    </li>
  );
};

export default Movie;
