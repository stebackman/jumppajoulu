import React from "react";
import "./InstructionBox.css";

function Instructionbox() {
  return (
    <div className="instructionbox">
      <p>
        Jokaisen luukun alta löytyy siis video missä esitetään tietty liike jota
        siis tarkoituksena tehdä.Toistomäärät päättää itse.Ajatuksena kuitenkin
        että jokaisena päivänä lisätään yksi liike rotaatioon. Eli ensimmäisenä
        päivänä lankku,toisena päivänä lankku + punnerrus (spoilasin!). Aina
        sopivin välein "nollataan". Nollaus tapahtuu kun video on jotain muuta
        kun "raskas" liike, esim jokin joogavideo tms mitä satun
        löytämään.DISCLAIMER:En oo nähny yhtäkään näistä videoista!
      </p>
    </div>
  );
}

export default Instructionbox;
