import React, { useState , useEffect } from "react"; //TODO: use state
import "./App.css";
import axios from 'axios';
import Text from './components/text';
import Image from './components/image';
import Date from './components/date';
import DummyData from './rawData' //* //TODO my raw data

function App() { //TODO: hard coded data, wire to API
  const [ photoData, setPhotoData ] = useState(DummyData); //*I chose null because thinking of this as a place holder for an expected object which the API returns
  console.log(photoData);



// // const fetchData = 
// useEffect( ()=>{
    // axios
    //   .get('https://api.nasa.gov/planetary/apod?api_key=baT0k6fiHRVp5ptXYAGEpZxNZRnAfr8Z1WfYgsIT')
    //   .then(yay => {
    //     console.log('yay!', yay);
    //     setPhotoData(yay.data);
    //   })
    //   .catch(drama => {
    //     console.log('oh NOOOOO!', drama)
    //     debugger;
    //   })
  // }, []);
  

  return (
    <div className="App">
      <Image url={photoData.url}/>
      <Date date={photoData.date}/>
      <Text explanation={photoData.explanation}/>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;