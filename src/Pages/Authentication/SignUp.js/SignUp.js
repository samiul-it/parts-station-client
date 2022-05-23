import React, { useEffect, useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from './../../../Firebase/firebase.init';

const SignUp = () => {
    
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleFormSubmit=()=>{
        
    }




    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up Here</h1>
              <p className="py-6">
                Please enter your valid email and password.If You lost your
                Email or Plassword,Please reset credentials from below.
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
                      type="text"
                      required
                      placeholder="Please enter your password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Signup</button>
                  </div>
                </form>
                <Link
                  className="text-base underline decoration-sky-500 "
                  to="/login"
                >
                  Already Have and Account? Login Here!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
        
};

export default SignUp;