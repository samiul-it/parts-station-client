import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../Firebase/firebase.init';
import useAdmin from './../../hooks/useAdmin';
import Loading from './../Shared/Loading/Loading';

const Dashboard = () => {
  const [user,loading]=useAuthState(auth);
  const [admin] = useAdmin(user);
  // console.log(admin);
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side m-5">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/my-reviews">My Review</Link>
            </li>
            <li>
              <Link to="/dashboard/profile">Profile</Link>
            </li>
            <li>{admin && <Link to="/dashboard/all-users">All Users</Link>}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
