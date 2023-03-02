import { useState  , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
  
import axios from 'axios';

function App() {
  const [ databro, setdata ] = useState(null); 
  const [ icao, seticao ] = useState(null); 
  const [ iata, setiata] = useState(null); 

  const lat = 19.0760 
  const long = 72.8777

  useEffect(() => {

  const options = {
  method: 'GET',
  url: `https://aerodatabox.p.rapidapi.com/airports/search/location/${lat}/${long}/km/100/16`,
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
      <input type="text"  />
    </div>
  )
}

export default App
