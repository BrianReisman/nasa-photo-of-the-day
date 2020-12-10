import React from 'react';
import StyledTitle from './StyledTitle';

console.log(StyledTitle)

const Title = (props) => {

  return(
  <StyledTitle>
    <h1>{props.theData.title}</h1>
    <p>{props.theData.date}</p>
  </StyledTitle>
  ); 
}

export default Title;