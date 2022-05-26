import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Error from "./Pages/Authentication/Error/Error";
import Login from "./Pages/Authentication/Login/Login";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./Pages/Authentication/SignUp.js/SignUp";
import Reviews from "./Pages/Home/Reviews/Reviews";
import RequireAuth from "./Pages/Authentication/RequireAuth/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import MyReviews from "./Pages/Dashboard/MyReviews/MyReviews";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import Products from "./Pages/Products/Products";
import PurchaseProduct from "./Pages/PurchaseProduct/PurchaseProduct";
import AllUser from "./Pages/Dashboard/AllUser/AllUser";
import RequireAdmin from './Pages/Authentication/RequireAdmin/RequireAdmin';
import Payment from "./Pages/Dashboard/Payment/Payment";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import ManageAllProducts from './Pages/Dashboard/ManageAllProducts/ManageAllProducts';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import Blog from "./Pages/Blog/Blog";
import Portfolio from "./Pages/Home/Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route
            path="/dashboard/my-reviews"
            element={<MyReviews></MyReviews>}
          ></Route>
          <Route
            path="/dashboard/payment/:id"
            element={<Payment></Payment>}
          ></Route>
          <Route
            path="/dashboard/profile"
            element={<MyProfile></MyProfile>}
          ></Route>
          <Route
            path="/dashboard/addproduct"
            element={<AddProduct></AddProduct>}
          ></Route>
          <Route
            path="/dashboard/manageallproducts"
            element={
              <RequireAdmin>
                <ManageAllProducts></ManageAllProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/all-orders-admin"
            element={<ManageAllOrders></ManageAllOrders>}
          ></Route>
          <Route
            path="/dashboard/allusers"
            element={
              <RequireAdmin>
                <AllUser></AllUser>
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route
          path="products"
          element={
            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="products/:id"
          element={
            <RequireAuth>
              <PurchaseProduct></PurchaseProduct>
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
