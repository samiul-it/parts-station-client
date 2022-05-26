import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index,refetch}) => {

    const {email,role}=user;
    const handleMakeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`, {
          method: "PUT",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            toast.success("Added as an Admin");
            refetch();
          });

    }
    return (
      <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>
          {role !== "admin" && (
            <button onClick={handleMakeAdmin} className="btn btn-xs">
              Make Admin
            </button>
          )}
        </td>
      </tr>
    );
};

export default UserRow;