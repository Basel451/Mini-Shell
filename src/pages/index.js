import * as React from "react";
import NavKomponent from "../Component/NavKomponent";
import homepage_bild from "../images/homepage_bild.png";

const KommendeVeranstaltungen = () => {
  return (
    <>
      <NavKomponent/>
      <center ><img src={homepage_bild}  alt="Skatebord" width="95%" height="60%"/></center>
      
    </>
  );
}

export default KommendeVeranstaltungen;