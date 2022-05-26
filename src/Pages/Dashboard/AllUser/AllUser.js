import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import UserRow from "../UserRow/UserRow";

const AllUser = () => {
  // const [users,setUsers]=useState([]);
  // useEffect(()=>{
  //     fetch("https://thawing-savannah-63615.herokuapp.com/users", {
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
    fetch("https://thawing-savannah-63615.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
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
