import './App.css';
import Homepage from './Homepage';
import Loginpage from './Loginpage';
import Signuppage from './Signuppage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index='/' element={<Loginpage></Loginpage>}></Route>
        <Route path='/register' element={<Signuppage></Signuppage>}></Route>
        <Route path='/homepage' element={<Homepage></Homepage>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
