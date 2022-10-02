import Person from './components/PersonCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <Person 
      first_name = {"Christian"} 
      last_name = {"Lozano"}  
      hairColor = {"Black"}
      initialAge = {22}
      />
      <Person 
      first_name = {"John"} 
      last_name = {"Smith"}  
      hairColor = {"Brown"}
      initialAge = {34}
      />
    </div>
  );
}

export default App;
