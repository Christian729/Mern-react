import Person from './components/PersonCard'
import './App.css';


function App() {
  return (
    <div className="App">
      <Person first_name = { "Christian" } last_name = { "Lozano" } age = { "22" } hairColor = { "Black" }/>
      <Person  first_name = { "Neva" } last_name = { "Smith" } age = { "20" } hairColor = { "Brown" }/>
      <Person  first_name = { "Neva" } last_name = { "Lozano" } age = { "28" } hairColor = { "Black" }/>
      <Person  first_name = { "Jordan" } last_name = { "Jones" } age = { "37" } hairColor = { "Bald" }/>
    </div>
  );
}

export default App;
