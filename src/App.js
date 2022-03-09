import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Months from './components/Months';
import ActMonth from './components/ActMonth';


function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element = { <Home /> } />
          <Route path='/months' element={ <Months />} />   
          <Route path='/actMonth' element={ <ActMonth /> } />

        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
