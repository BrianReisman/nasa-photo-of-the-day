//imports
import React from 'react';


//components - JSX-ville
const Image = (props) => {
  const { url } = props 
  //unpack props
// console.log(url);

  //must return something. Usually JSX
  return (
    <img
      className={'imgClass'}
      src={url}
      alt="Today's view from outer space."
    ></img>
  );
}

//export
export default Image;