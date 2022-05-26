import React, { useEffect, useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { toast } from 'react-toastify';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [sendPasswordResetEmail, sending] =
    useSendPasswordResetEmail(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigateToLogin = () => {
    navigate("/login");
  };

  const resetEmailRef=useRef();

  const sendResetPassword=()=>{
    const email=resetEmailRef.current.value;

    sendPasswordResetEmail(email);
    toast.success("Password Reset Email Sent");

  }

  useEffect(() => {
    if (user) {
    }
  }, [user]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    await signInWithEmailAndPassword(email, password);
    console.log("Login Successfull");
  };

  if (error) {
    return <h5 className="text-danger"> {error.message}</h5>;
  }
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <input type="checkbox" id="pass-reset" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="pass-reset"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Please Enter your email Address..
          </h3>
          <p className="py-4">
            <input
              ref={resetEmailRef}
              type="email"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <button
              onClick={sendResetPassword}
              className="btn btn-outline btn-accent"
            >
              Reset
            </button>
          </p>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login here</h1>
            <p className="py-6">
              Please enter your valid email and password.If You lost your Email
              or Plassword,Please reset credentials from below.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    ref={emailRef}
                    type="text"
                    placeholder="Please Enter your email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    ref={passwordRef}
                    type="password"
                    required
                    placeholder="Please enter your password"
                    className="input input-bordered"
                  />

                  <label
                    htmlFor="pass-reset"
                    className="label-text-alt link link-hover label-text-alt modal-button"
                  >
                    Forgot password?
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div>
                <GoogleLogin></GoogleLogin>
              </div>
              <Link
                className="text-base underline decoration-sky-500 "
                to="/signup"
              >
                New to Parts Station? Register Here!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
