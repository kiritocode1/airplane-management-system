import { useState  , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
  
import axios from 'axios';

function App() {
  const [ databro, setdata ] = useState(null); 
  const [ icao, seticao ] = useState(null); 
  const [ iata, setiata] = useState(null); 

//! change these 2 numbers 🤡
  const [ lattitude, setlattitude ] = useState(19.0760); 
  const [longitude, setlongitude] = useState(72.8777);

  const handlelatitude = (e) => {
    e.preventDefault(); 
    setlattitude(e.target.value); 
}
  const handlelongitude = (e) => {
    e.preventDefault(); 
    setlongitude(e.target.value); 
}


  useEffect(() => {

  const options = {
  method: 'GET',
  url: `https://aerodatabox.p.rapidapi.com/airports/search/location/${lattitude}/${longitude}/km/100/16`,
  params: {withFlightInfoOnly: 'false'},
  headers: {
    'X-RapidAPI-Key': '461526573emsh333436890e661d4p122b96jsn728ba2bdf38b',
    'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
  console.log(response.data);
  setdata(response?.data.items);

  seticao(response?.data.items[ 0 ].icao); 
  setiata(response?.data.items[ 0 ].iata); 


}).catch(function (error) {
	console.error(error);
});
  }, [])
  return (
    <div className="App">

      <input type="text" value={lattitude} onSubmit={ e => handlelatitude(e) } />

      <input type="text" onChange={e => handlelongitude(e)} />
    
      <div>{ icao }</div>
      {/* developer side  */ }
      <div>JSON.stringify(databro)</div>
    </div>
  )
}

export default App
