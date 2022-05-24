import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import { toast } from 'react-toastify';
import Loading from './../Loading/Loading';

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);

  const [sendEmailVerification, sending, verificationError] =
    useSendEmailVerification(auth);

  const logout = () => {
    signOut(auth);
  };

  if (error) {
    toast.error(error.message);
  }
  if (sending) {
    return <Loading></Loading>
  }

  // console.log(user);



  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About </Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/contact-us">Contact Us</Link>
      </li>
    </>
  );
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
                <li>{user && <Link to="/dashboard">Dashboard </Link>}</li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {menuItems}
              <li>{user && <Link to="/dashboard">Dashboard </Link>}</li>
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <div className="dropdown dropdown-hover">
                  <label tabIndex="0" className="btn btn-ghost m-1">
                    {user?.displayName}{" "}
                    {user?.emailVerified == true ? (
                      <span className="badge badge-sm">Verified</span>
                    ) : (
                      <span className="badge badge-sm">Unverified</span>
                    )}
                  </label>
                  <ul
                    tabIndex="0"
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      {user?.emailVerified == true ? (
                        <button>Email Verified</button>
                      ) : (
                        <button
                          onClick={async () => {
                            await sendEmailVerification();
                            toast.success("Verification Email Sent");
                          }}
                        >
                          Verify Email
                        </button>
                      )}
                    </li>
                  </ul>
                </div>
                <button onClick={logout} className="btn">
                  Logout
                </button>
              </>
            ) : (
              <Link className="btn" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;