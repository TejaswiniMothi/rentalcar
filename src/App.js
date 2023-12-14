
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import HomeCustomer from './Components/HomeCustomer';
import Unbookedcarswithoutid from './Components/Unbookedcarswithoutid';
import Unbookeddriverswithoutid from './Components/Unbookeddriverswithoutid';
import Bill from './Components/Bill';
import Bookedcarswithid from './Components/Bookedcarswithid';
import Bookedcarswithoutid from './Components/Bookedcarswithoutid';
import Bookeddriverswithoutid from './Components/bookeddriverswithoutid';
import Unbookeddriverswithid from './Components/Unbookeddriverswithid';
import Unbookedcarswithid from './Components/Unbookedcarswithid';
import Logout from './Components/Logout';
import CustomerMaster from './Components/CustomerMaster';
import Blogs from './Components/Blogs';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import Removecar from './Components/Removecar';
import Removedriver from './Components/Removedriver';
import Addcar from './Components/Addcar';
import Adddriver from './Components/Adddriver';
import Updatecar from './Components/Updatecar';
import Updatedriver from './Components/Updatedriver';
import Reportallcars from './Components/Reportallcars';
import Reportalldrivers from './Components/Reportalldrivers';
import Reportavailablecars from './Components/Reportavailablecars';
import BookedReportcars from './Components/BookedReportcars';
import Reportavailabledrivers from './Components/Reportavailabledrivers';
import Reportbookedrivers from './Components/Reportbookedrivers';
import Createride from './Components/Createride';
import Editride from './Components/Editride';
import Deleteride from './Components/Deleteride';
import CustomerReport from './Components/CustomerReport';
import HomeAdmin from './Components/HomeAdmin';
import Reports from './Components/Reports';
import AdminMaster from './Components/AdminMaster';
function App() {
return(
  <div>
    <BrowserRouter>
    <Routes>
    <Route path='/Login' element={<Login></Login>}></Route>
    <Route path ='/' element={<CustomerMaster></CustomerMaster>}>
    <Route path='/HomeCustomer' element={<HomeCustomer></HomeCustomer>}></Route>
    <Route path='/HomeAdmin' element={<HomeAdmin></HomeAdmin>}></Route>
    <Route path='/Unbookedcarswithoutid' element={<Unbookedcarswithoutid></Unbookedcarswithoutid>}></Route>
    <Route path='/Unbookeddriverswithoutid' element={<Unbookeddriverswithoutid></Unbookeddriverswithoutid>}>/</Route>
    <Route path='/Bill' element={<Bill></Bill>}></Route>
    <Route path='/Bookedcarswitoutid' element={<Bookedcarswithoutid></Bookedcarswithoutid>}></Route>
    <Route path='/Bookeddriverswithoutid' element={<Bookeddriverswithoutid></Bookeddriverswithoutid>}></Route>
    <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
    <Route path='/ContactUs'element={<ContactUs></ContactUs>}></Route>
    <Route path='/AboutUs'element={<AboutUs></AboutUs>}></Route>
    <Route path='/Reportavailablecars' element={<Reportavailablecars></Reportavailablecars>}></Route>
    <Route path='/BookedReportcars'element={<BookedReportcars></BookedReportcars>}></Route>
    <Route path='/Reportavailabledrivers' element={<Reportavailabledrivers></Reportavailabledrivers>}></Route>
    <Route path='/Reportbookedrivers' element={<Reportbookedrivers></Reportbookedrivers>}></Route>
    <Route path='/Createride' element={<Createride></Createride>}></Route>
    <Route path='/Editride' element={<Editride></Editride>}></Route>
    <Route path='/Deleteride' element={<Deleteride></Deleteride>}></Route>
    <Route path='/CustomerReport' element={<CustomerReport></CustomerReport>}></Route>
    <Route path='/Reports' element={<Reports></Reports>}></Route>
    
    <Route path='/' element={<AdminMaster></AdminMaster>}>
    <Route path='/Bookedcarswithid' element={<Bookedcarswithid></Bookedcarswithid>}></Route>
    <Route path='/Unbookedcarswithid' element={<Unbookedcarswithid></Unbookedcarswithid>}></Route>
    <Route path='/Unbookeddriverswithid' element={<Unbookeddriverswithid></Unbookeddriverswithid>}></Route>
    <Route path='/Addcar' element={<Addcar></Addcar>}></Route>
    <Route path='/Removecar' element={<Removecar></Removecar>}></Route>
    <Route path='/Updatecar'element={<Updatecar></Updatecar>}></Route>
    <Route path='/Adddriver' element={<Adddriver></Adddriver>}></Route>
    <Route path='/Removedriver'element={<Removedriver></Removedriver>}></Route>
    <Route path='/Updatedriver'element={<Updatedriver></Updatedriver>}></Route>
    <Route path='/Reportallcars' element={<Reportallcars></Reportallcars>}></Route>
    <Route path='/Reportalldrivers' element={<Reportalldrivers></Reportalldrivers>}></Route>











    </Route>

    </Route>
    <Route path='/Logout' element={<Logout></Logout>}></Route>
    </Routes>              
    </BrowserRouter>
  </div>
)




}

export default App;
