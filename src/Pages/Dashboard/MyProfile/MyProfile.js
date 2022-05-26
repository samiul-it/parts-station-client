import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import auth from './../../../Firebase/firebase.init';
import { useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const [user,loading,error]=useAuthState(auth);
    const [profileData,setProfileData]=useState([]);

    const educationRef=useRef();
    const phoneRef=useRef();
    const cityRef=useRef();
    const linkRef=useRef();

    //loading users data


    const url = `http://localhost:5000/profile/${user.email}`;

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setProfileData(data));
    }, [user]);







    if(loading){
        return <Loading></Loading>;
    }

    const handleFormSubmit=(e)=>{

        e.preventDefault();

        const edu=educationRef.current.value;
        const phone=phoneRef.current.value;
        const city=cityRef.current.value;
        const link=linkRef.current.value;

        const passToDb={
            city,
            edu,
            phone,
            link
        }


        // console.log(edu,phone,city,link);

        //Updating User data

        fetch(`http://localhost:5000/profile/${user.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(passToDb),
        }).then((res) => {
          res.json();
          toast.success("Information Added");
        }).then(data=>console.log(data));
        

    }



    return (
      <div>
        <p>Welcome to My Profile</p>
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Your Informations</h1>
          <div className="py-1">
            <h1 className="text-xl text-blue-900">Name:{user?.displayName}</h1>
            <h1 className="text-xl text-blue-800">Email: {user?.email}</h1>
            <h1 className="text-xl text-blue-800">
              City: {profileData[0]?.city}
            </h1>
            <h1 className="text-xl text-blue-800">
              Education: {profileData[0]?.edu}
            </h1>
            <h1 className="text-xl text-blue-800">
              Phone: {profileData[0]?.phone}
            </h1>
            <a className='text-red-500' href={profileData[0]?.linkedin}>Linkedin</a>
          </div>
        </div>
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">City</span>
                    </label>
                    <input
                      ref={cityRef}
                      type="text"
                      placeholder="Please Enter your City"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Education</span>
                    </label>
                    <input
                      ref={educationRef}
                      type="text"
                      placeholder="Please Enter your Education"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Add Linkedin Profile Link
                      </span>
                    </label>
                    <input
                      ref={linkRef}
                      type="text"
                      placeholder="Please Enter your email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      ref={phoneRef}
                      type="text"
                      required
                      placeholder="Please enter your Phone Number"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;