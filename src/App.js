import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import dummyData from "./data";
import Description from "./components/Description/Description";
import Title from "./components/Title/Title";
import Visual from "./components/Visual/Visual";


function App() {
  const [data, setData] = useState('');
  // const [data, setData] = useState(dummyData);
  // console.log("****From App******", data);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res)
        console.log(res.data)
            setData(res.data)
      })
      .catch(err => {
        console.log(err)
        throw new Error('OOOOOPPSE!')
      })
  },[]);

  return (
    <div className="App">
      <Title theData={data} />
      <Visual theData={data} />
      <Description theData={data} />
    </div>
  );
}

export default App;
