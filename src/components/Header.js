import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-3 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img
        className="w-48"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

      {user && (
        <div className="flex">
          <img className="w-12 h-12" alt="userIcon" src={user?.photoURL} />

          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
