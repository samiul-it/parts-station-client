import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from "react-toastify";
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Error from './Pages/Authentication/Error/Error';
import Login from './Pages/Authentication/Login/Login';
import "react-toastify/dist/ReactToastify.css";
import SignUp from './Pages/Authentication/SignUp.js/SignUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>

        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
