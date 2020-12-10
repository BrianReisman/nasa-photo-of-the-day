import React from 'react';
import Banana from './StyledDescription';

const Description = (props) => {
 return(
  <Banana>
    <div>{props.theData.explanation}</div>
    <footer>Fine print here, please don't sue me.</footer>
  </Banana>

 ); 
}

export default Description;