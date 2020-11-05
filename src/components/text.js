//imports
import React from 'react';


//components - JSX-ville
const Text = (props) => {
  const { explanation } = props
  //unpack props
  console.log(props);

  //must return something. Usually JSX
  return (
    <div className="textClass">
      <p >{explanation}</p>
    </div>
  );
}

//export
export default Text;