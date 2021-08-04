import * as React from "react";
import { useState, useEffect } from "react";
import * as axios from "axios";

const Detailseite = ({ params }) => {
  const [eintrag, setEintrag] = useState({});
  const E_id = params.id;
  async function dateneinholen() {
    return await axios
      .get("http://localhost:3000/Kalendereintrag/" + E_id)
      .then(
        await function (res) {
          setEintrag(res.data);
        }
      )
      .catch((err) => {
        console.log(JSON.stringify(err));
        return "Hooply, etwas ist schief gelaufen!!";
      });
  }
  useEffect(() => {
    dateneinholen();
  }, []);
  return (
    <>
      <center>
        <h1>{eintrag.beschreibung}</h1>
      </center>
    </>
  );
};

export default Detailseite;
