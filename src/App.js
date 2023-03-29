import './App.css';

import AllCountry from './components/AllCountry/AllCountry';

function App() {
  return (
    <div className="App">
         <AllCountry> </AllCountry>
    </div>
  );
}

// function LoadCountry(){
//   const [countries, setCountries]=useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))
//   },[])
//   return (
//     <div>
//       <h1>Show All Country Details Using API</h1>
//       <p>Available Country:{countries.length}</p>
//       {
//         countries.map(country=>AllCountry(country))
//       }
//     </div>
//   )

// }

// function AllCountry(props){
//   return (
//     <div>
//       <h3>Name:{props.name.common}</h3>
//       <p>Population: {props.population}</p>
//     </div>
//   )
// }

export default App;
