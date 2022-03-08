import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  return (
    <div>
      This is the profile page for {username}
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        change to about page
      </button>
    </div>
  );
};

export default Profile;
