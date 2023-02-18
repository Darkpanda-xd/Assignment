import React from "react";
import "./Home.css";
import File from "../../Components/Files/File";
import Details from "../../Components/PersonalDetails/Details";
import {profileData} from "./HomeData"
import { schedule } from "./HomeData";
import Schedule from "../../Components/Schedule/Schedule";
// profile picture



const Home = () => {
  return (
    <div className="h-wrapper">
      <div className="user-profile">
        {profileData.map(
          ({
            id,
            profile,
            name,
            email,
            history,
            upComing,
          }) => {
            return (
              <div
                key={id}
                className="profile-item"
              >
                <img
                  src={profile}
                  alt="profile picture"
                />
                <h1>{name}</h1>
                <h3>{email}</h3>
                <div className="checklist">
                  <span className="past">
                    <h4>{history}</h4>
                    <p>Past</p>
                  </span>
                  <div className="border"></div>
                  <span className="past">
                    <h4>{upComing}</h4>
                    <p>Upcoming</p>
                  </span>
                </div>
              </div>
            );
          }
        )}
        <button className="btn">
          Send Message
        </button>
      </div>
      {/* files & document section */}
      <div className="files">
        <h4>Files / Documents</h4>
        <File />
      </div>
      {/* profile details section */}
      <div className="p-details">
        <Details
          details={profileData}
        />
      </div>
      {/* record section */}
      <div className="p-records">
     
          <button className="btn p-btn active">
            Upcoming Appointments
          </button>

          <button className="btn p-btn">
            Past Appointments
          </button>
  

          <button className="btn p-btn ">
            Medical Records
          </button>
   
      </div>
      <div className="schedules">
        <Schedule schedules={schedule}/>
      </div>
    </div>
  );
};

export default Home;
