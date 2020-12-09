import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import dummyData from './data';
import Description from './components/Description'
import Title from './components/Title'
import Visual from './components/Visual'

function App() {
  const [data, setData] = useState(dummyData)

  
useEffect(()=>{
  // axios
  //   .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  //   .then(res => {
  //     console.log(res)
  //     console.log(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     throw new Error('OOOOOPPSE!')
  //   })
})

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        <Title/>
        <Visual/>
        <Description/>
      </p>
    </div>
  );
}

export default App;
