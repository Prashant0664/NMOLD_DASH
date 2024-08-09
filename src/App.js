import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import TopNavbar from './Pages/TopNavbar';
import PurchaseAll from './Pages/PurchaseAll';
import Customers from './Pages/Customers';
import Suppliers from './Pages/Suppliers';
import StockAll from './Pages/StockAll';
import Categories from './Pages/Categories';
import Units from './Pages/Units';
import CustomersReport from './Pages/CustomersReport';
import DueCustomers from './Pages/DueCustomers';
import PrintInvoice from './Pages/PrintInvoice';
import AllProducts from './Pages/AllProducts';
import AllInvoice from './Pages/AllInvoice';
import AddForms from './Pages/AddForms';
import AddCategory from './Components/PopupBox/AddCategory';
import PopUpMain from './Components/PopupBox/PopUpMain';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  // https://www.figma.com/design/sxn5pvw5PM59CHNTwBFjYn/Inventory-Management-Web-%2B-Android?node-id=0-1&t=keUplJRB88dke1HD-0
  return (
      // <Navbar />

        // {/* <Login/> */}
        // {/* <AddCategory ids={10}/> */}
        // {/* <PopUpMain id={10} /> */}
        // {/* <TopNavbar/>*/}
        //   {/*
      // <Navbar/>
      <Home/>
      // <Customers />
      // <StockAll />
      // <Categories />
      // <Units />
      // <CustomersReport />
      // <DueCustomers/>
      // <PrintInvoice/>
      // <AllProducts />
      // <AllInvoice />
      // <AddForms /> 
      // */}
  );
}

export default App;