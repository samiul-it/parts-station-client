import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import UserRow from "../UserRow/UserRow";
import { signOut } from 'firebase/auth';
import auth from './../../../Firebase/firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AllUser = () => {


  const navigate=useNavigate();
  // const [users,setUsers]=useState([]);
  // useEffect(()=>{
  //     fetch("https://parts-station-server.onrender.com/users", {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },})
  //     .then(res=>res.json())
  //     .then(data=>setUsers(data));
  // },[users])

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://parts-station-server.onrender.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) =>{
      if (res.status == 200) {
       return res.json();
      }
      if(res.status==403 || 401){
        console.log(res);
        navigate('/home');
        signOut(auth);
        toast.error("Trying to Access Admin Role");
      }
      
      })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <p className="text-3xl">All User :{users.length}</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#SL</th>
              <th>User Email</th>
              <th>Product Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
