
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
import FetchAllOrders from "./components/order/viewAllOrders/FetchAllOrders";
import AdminDashBoard from "./components/admin/AdminDashBoard";
import OrdersByStatus from "./components/order/viewOrdersByStatus/OrdersByStatus";
import AddMed from "./components/medicine/addMedicine/AddMedicine";
import Register from "./components/register/Register";
import AddPrescription from "./components/prescription/addPrescription/AddPrescription";
import UpdateMedicine from "./components/medicine/updateMedicine/UpdateMedicine";
import FetchPrescriptionByUserId from "./components/prescription/fetchPrescriptionByUserId/FetchPrescriptionByUserId";
import AddOrder from "./components/order/addOrder/AddOrder";
import AllMedicine from "./components/medicine/viewAllMedicine/AllMedicine";
import MedcineById from "./components/medicine/medicineById/MedicineById";





function App() {
  return (

    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/admin" element={<AdminDashBoard/>}/>
    <Route path="/customer/all" element={<FetchAllCustomers/>}/>
    <Route path="/customer/:userId" element={<FetchCustomer/>}/>
    <Route path="/customer/update/:userId" element={<UpdateCustomer/>}/>
    <Route path="/customer/update/address/:userId" element={<UpdateAddress/>}/>
    <Route path='/order/all' element={<FetchAllOrders/>}/>
    <Route path='/orders/status' element={<OrdersByStatus/>}/>
    <Route path='/medicine/add' element={<AddMed/>}/>
    <Route path='/register' element={<Register/>}/>

    <Route path='/prescription/add' element={<AddPrescription/>}/>
    <Route path='medicine/update/:medid' element={<UpdateMedicine/>}/> 

    <Route path='/prescriptions/:userId' element={<FetchPrescriptionByUserId/>}/>
    <Route path="/order/addorder" element={<AddOrder />} />
    <Route path="/medicine/all" element={<AllMedicine />} />
    <Route path="/medicine/:id" element={<MedcineById />} />
    

    
    </Routes>
    </BrowserRouter>
   
  </div>
  )
}

export default App;
