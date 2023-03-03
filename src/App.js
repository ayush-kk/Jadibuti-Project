
import "./App.css";
import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import FetchAllCustomers from "./components/customer/fetchAllCustomers/FetchAllCustomers";
import FetchCustomer from "./components/customer/fetchCustomer/FetchCustomer.js";
import UpdateCustomer from "./components/customer/updateCustomer/UpdateCustomer";
import UpdateAddress from "./components/customer/updateAddress/UpdateAddress";
import AddMed from "./components/medicine/addMedicine/AddMedicine";
import Register from "./components/register/Register";
import AddPrescription from "./components/prescription/AddPrescription";
import UpdateMedicine from "./components/medicine/updateMedicine/UpdateMedicine";




function App() {
  return (

    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/customer/all" element={<FetchAllCustomers/>}/>
    <Route path="/customer/:userId" element={<FetchCustomer/>}/>
    <Route path="/customer/update/:userId" element={<UpdateCustomer/>}/>
    <Route path="/customer/update/address/:userId" element={<UpdateAddress/>}/>
    <Route path='/medicine/add' element={<AddMed/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/prescription/add' element={<AddPrescription/>}/>
    <Route path='medicine/update/:medid' element={<UpdateMedicine/>}/> 
    

    </Routes>
    </BrowserRouter>
   
  </div>
  )
}

export default App;
