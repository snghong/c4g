import "./index.css";

import {
  pullStudentFirstName,
  pushFirstName,
  pushLastName,
} from "./lib/init-firebase";
import { pullStudentLastName } from "./lib/init-firebase";
import { useEffect } from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import { useState } from "react";

function Profile() {
  //const user = localStorage.getItem("user");
  const user = "ConnorChen";
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // useEffect(() => {
  //   pullStudentFirstName(user);
  //   pullStudentLastName(user);
  //   setFirstName(pushFirstName());
  //   setLastName(pushLastName());
  // }, []);

  return (
    <div>
      <NavBar />
      <SideBar />
      <div class="profile">
        <h2>{user}</h2>
        <img
          className="profile-pic"
          src={
            "https://media-exp1.licdn.com/dms/image/C5603AQE-P6eQxmXTOw/profile-displayphoto-shrink_800_800/0/1638378379553?e=1668643200&v=beta&t=k9uazl4OMSY8ub1Qm3GUvqI3gE4caTz6g_UJ_Dy_wDA"
          }
          alt={"Connor Chen"}
        />
      </div>
      <div class="bottom-bar">
        <div class="user-pass-report">
          <div class="bar">Username: {user}</div>
          <div class="bar">Change Your Password</div>
          <div class="bar">Meeting Requests</div>
        </div>
        <div className="mentor-profile-meetings">
          <h2>Next Live Meeting</h2>
          <p>9/30 Chess Age 5-9 - 4:00 PM EST</p>
          <p>10/18 Music Age 5-9 - 4:30 PM EST</p>
          <p>11/12 1-on-1 (John Doe) - 3:30 PM EST</p>
        </div>
      </div>
      <div className="interests">
        <p>Mentees</p>
        <img
          src="https://pbs.twimg.com/profile_images/1484345356557041666/b0ntme74_400x400.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/474x/b9/37/6e/b9376e7d2175a59d1d44b7fcf4442f26.jpg"
          alt=""
        />
        <img
          src="https://ipsf.net/wp-content/uploads/2021/12/Sebastian-Alexis-landscape-400x400.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
export default Profile;
