import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
     <Countries></Countries>

    </div>
  );
}




/*
 
function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect (() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => setCountries(data))
  } ,[])
  return (
    <div>
      <h2>Rest countries</h2>
      <h3>Total countries = {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <div className="bg-info m-2 p-2">

      
<h2>Name : {props.name}</h2>
<h2 className="">Capital : {props.capital}</h2>
    </div>
    </div>
  )
}

 */
export default App;
