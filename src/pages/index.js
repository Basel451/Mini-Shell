import * as React from "react";
import NavKomponent from "../Component/NavKomponent";
import homepage_bild from "../images/homepage_bild.png";

const KommendeVeranstaltungen = () => {
  const microFrontendsByRoute = {
    "/": "http://localhost:3001/",
    "/KLETTERN": "http://localhost:3001/Klettern",
    "/ARTISTIK": "http://localhost:3001/Artistik",
    "/HALLE59": "http://localhost:3001/Halle59",
    "/TRIAL": "http://localhost:3001/Trial",
  };
  const pfadAendern = (pfad) => {
    document.getElementById("micro-frontend-container").src =
      microFrontendsByRoute[pfad];
  };
  setTimeout(() => {
    pfadAendern("/");
  }, 0);

  return (
    <>
      <center>
        <NavKomponent fun={pfadAendern} />
        <img src={homepage_bild} alt="Skatebord" width="95%" height="60%" />
        {/*<iframe className="iFrame_Element" title="Micro frontend" src="http://localhost:3001/" ></iframe>*/}
        <iframe
          id="micro-frontend-container"
          className="iFrame_Element"
          title="Micro frontend"
        ></iframe>
      </center>
    </>
  );
};

export default KommendeVeranstaltungen;
