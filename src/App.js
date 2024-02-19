
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import AddUser from './users/AddUser';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Search from './users/Search';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
function App() {
  return (
    <div>
<Router>
<Navbar/>
<Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/adduser" element={<AddUser/>}/>
  <Route exact path="/search" element={<Search/>}/>
  <Route exact path="/edituser/:id" element={<EditUser/>}/>
  <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
  </Routes> 
</Router>


    </div>
  );
}

export default App;
