import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";
import auth from "./../../../Firebase/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import useToken from "../../../hooks/useToken";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [token] = useToken(user);
  // console.log(user?.user?.email);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    await signInWithGoogle();
  };
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
      toast.success("Sign in Successful");
    }
  }, [token]);

  if (error) {
    toast.error(error.message);
  }
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="form-control mt-6">
        <button className="my-2 btn btn-success" onClick={loginWithGoogle}>
          {" "}
          Google Login
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
