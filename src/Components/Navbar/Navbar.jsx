import React from "react";
import {FaPlus} from "react-icons/fa"
import {AiOutlineUser,AiOutlineFolderOpen,AiOutlineCloudUpload,AiOutlineFileText} from "react-icons/ai"
import {RxGear} from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import './Navbar.css'


{
  /*logo*/
}
const logo = "./Images&logos/logo.png";
const Navbar = () => {
  return (
    <div className="n-bar">
      <div className="n-Wrapper">
        <div className="n-logo">
          <img
            src={logo}
            alt="logo"
           
          />
        </div>
        <div className="n-items">
          <ul>
            <li className="n-item">
                <FaPlus size="18px"/>
                <p>NEW</p>
            </li>
            <li className="n-item">
                <AiOutlineUser size="24px"/>
                <p>PATIENT</p>
            </li>
            <li className="n-item">
                <AiOutlineFolderOpen size="24px"/>
                <p>FOLDER</p>
            </li>
            <li className="n-item">
                <AiOutlineCloudUpload size="24px"/>
                <p>UPLOAD</p>
            </li>
            <li className="n-item">
                <AiOutlineFileText size="24px"/>
                <p>UPLOAD</p>
            </li>
            <li className="n-item">
                <RxGear size="24px"/>
                <p>SETTINGS</p>
            </li>
            <li className="n-item">
                <FiLogOut size="24px"/>
                <p>LOGOUT</p>
            </li>
         
          </ul>
        </div>
   

      </div>
      {/* border line */}
      <div className="n-border"></div>
    </div>
  );
};

export default Navbar;
