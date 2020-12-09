import React from 'react';

const Title = (props) => {
  return(
  <>
    <h1>{props.theData.title}</h1>
    <p>{props.theData.date}</p>
  </>
  ); 
}

export default Title;