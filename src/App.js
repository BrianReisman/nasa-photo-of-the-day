import React, { useState , useEffect } from "react"; //TODO: use state
import "./App.css";
// import axios from 'axios';
import Text from './components/text';
import Image from './components/image';
import Date from './components/date';
import Header from './components/header'
import DummyData from './rawData' //* //TODO my raw data



function App() { //TODO: hard coded data, wire to API
  const [ photoData, setPhotoData ] = useState(DummyData); //*something WILL be here. use '' with axios
  console.log(photoData);


// useEffect( ()=>{
//     axios
//       .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//       .then(res => {
//         console.log('res!', res.data);
//         setPhotoData(res.data);
//       })
//       .catch(drama => {
//         console.log('oh NOOOOO!', drama)
//       })
//   }, []);
  

  return (
    <div className="App">
      <Header/>
      <Image url={photoData.url}/>
      <Date date={photoData.date}/>
      <Text explanation={photoData.explanation}/>
    </div>
  );
}

export default App;