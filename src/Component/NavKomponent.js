import * as React from "react";
import "../Style/KommendeVeransatltung_Style.css";
import logo from "../images/logo.png";

const NavKomponent = ({ value, fun }) => {
  return (
    <>
      <div className="div_Navigation">
        <div
          className="logo"
          onClick={() => {
            fun("/");
          }}
        >
          <img src={logo} alt="AHK" width="200px" height="105px" />
        </div>
        <div className="NEUES">
          <h4>NEUES</h4>
        </div>
        <div className="DIE_AHK">
          <h4>DIE AHK </h4>
        </div>
        <div className="KLETTERN" onClick={() => {
            fun("/KLETTERN");
          }}>
          <h4>KLETTERN</h4>
        </div>
        <div className="ARTISTIK" onClick={() => {
            fun("/ARTISTIK");
          }}>
          <h4>ARTISTIK</h4>
        </div>
        <div className="HALLE59" onClick={() => {
            fun("/HALLE59");
          }}>
          <h4>HALLE59</h4>
        </div>
        <div className="TRAILS59">
          <h4>TRAILS59</h4>
        </div>
        <div className="TRIAL" onClick={() => {
            fun("/TRIAL");
          }}>
          <h4>TRIAL</h4>
        </div>
        <div className="KONTAKT">
          <h4>KONTAKT</h4>
        </div>
        <div className="SHOP">
          <h4>SHOP</h4>
        </div>
      </div>
    </>
  );
};

export default NavKomponent;
