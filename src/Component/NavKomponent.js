import * as React from "react";
import "../Style/KommendeVeransatltung_Style.css";
import logo from "../images/logo.png";

const NavKomponent = () => {
  return (
    <>
      <div className="div_Navigation">
        <div className="logo">
            <img src={logo} alt="AHK" />
        </div>
        <div className="NEUES">
            <h3 >NEUES</h3>
        </div>
        <div className="DIE_AHK">
            <h3 >DIE AHK</h3>
        </div>
        <div className="KLETTERN">
            <h3 >KLETTERN</h3>
        </div>
        <div className="ARTISTIK">
            <h3 >ARTISTIK</h3>
        </div>
        <div className="HALLE59">
            <h3 >HALLE59</h3>
        </div>
        <div className="TRAILS59">
            <h3 >TRAILS59</h3>
        </div>
        <div className="TRIAL">
            <h3 >TRIAL</h3>
        </div>
        <div className="KONTAKT">
            <h3 >KONTAKT</h3>
        </div>
        <div className="SHOP">
            <h3 >SHOP</h3>
        </div>
      </div>
    </>
  );
}

export default NavKomponent;




