import './App.css';
import {Route,Router, Routes} from "react-router-dom"
import { Country } from './componets/Country';
import {City} from './componets/City'
import {User} from './componets/User'
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Routes>
        
        <Route path='add-country' element={<Country/>}></Route>
        <Route path='add-city' element={<City/>}></Route>
        <Route path='users'element={<User/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
