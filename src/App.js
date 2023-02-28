import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AddMed from './components/AddMedicine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/medicine/add' element={<AddMed/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
