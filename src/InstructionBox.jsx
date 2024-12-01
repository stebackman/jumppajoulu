import React, { useState, useEffect } from "react";

const InstructionBox = () => {
  // Store all the instructions
  const instructions = [
    "Päivä 1:Tervetuloa MoWelaisten joulukalenteriin.Jatkossa tästä boksista voi tarkistaa edellispäivien liikkeet niin ei tarvii kaikki videot klikata auki joka päivä. Ajatuksena siis että jokaisena päivänä lisätään päivän liike rotaation. Eli tänään lankku, huomenna lankku+punnerrus (spoilasin!) jne.Päivän liike tarkistetaan tottakai luukkua avaamalla!",
    "Päivä 2: Päivän 1 liikkeenä siis oli lankku! Muistithan tehdä! Mitäköhän luukusta kaks paljastuu?",
    "Päivä 3: Ekat kaks liikettä lankku ja punnerrus. Tänään tarvitaan lattian lisäksi myös seinä!",
    "Päivä 4:Pankkiin tähän asti kertyneet: lankku, punnerrus ja wall-squat. Nyt takaisin lattialle!",
    "Päivä 5:Eiköhän jo huilata ja laiteta tämä kotijumppa/loppujumppa tauolle tänään.Mitäköhän Stefu on keksinyt laittaa videoksi?",
    "Päivä 6: Tänään pyöräillään! Hyvää itsenäisyyspäivää!",
    "Päivä 7: Eilen pyöräiltiin, esiintyyköhän Miikka Timberlake vai joku muu Mowella tänään? Mitäköhän kalenterissa? Kurkkaa! ",
    "Päivä 8: Menikö eilen överiks?Ei haittaa.Bicycle crunch, kyykyt ja päivän uusi liike voi hyvin tehdä sitten kun olo on vähän parantunut ",
    "Päivä 9: Vielä mennään. Päivän liike aika kevyt. Sen lisäksi bicycle crunch,kyykyt ja dipit. ",
    "Päivä 10: Huilataan!",
    "Päivä 11: Heilutaan!Liikepankkissa ei liikkeitä",
    "Päivä 12: Eilisen liike leg raises, tänään voi taputtaa itsensä olkapäille jos on jaksanut tähän asti tämän joulukalenterin kanssa",
    "Päivä 13: Leg raises ja plank shoulder taps liikepankkisa.",
    "Päivä 14: Liikepankissa leg raises, plank shoulder taps ja glute bridge.",
    "Päivä 15: Tänään Stefulla sunnuntaisähly, joten eiköhän kaikki huilata.",
    "Päivä 16: Noniin, otetaan pientä loppuspurttia ja aloitetaan vuorikiipeily!",
    "Päivä 17: Jatketaan mounatain climbia, mitäköhän sen lisäksi?",
    "Päivä 18: Kohta huipulla! Liikepankissa mountain climbers ja askelkyykyt",
    "Päivä 19: Taitaa olla kilimanjaro! Mountain climbers,lunges ja pike push up liikepankissa.",
    "Päivä 20: Tai sittenkin mount everest? Vielä mennään! Mountain climbers,askelkyykyt,pike push up ja hollow hold liikepankissa. Päivän liikettä tekemällä pääse myös Essin kilttien listalle.",
    "Päivä 21: Huippu saavutettu! Huilataan.",
    "Päivä 22: Vielä muutamat. Tänpäiväinen tais olla jo tuttu?",
    "Päivä 23: Vieläkö täällä? Eilen lankku, tänään?",
    "Päivä 24: Hyvää joulua! 🎄",
  ];

  // Get the current day of December
  const today = new Date();
  const currentDay =
    today.getMonth() === 11 ? Math.min(today.getDate(), 24) : 1; // Defaults to day 1 if not December

  // State to manage the visible instruction
  const [visibleDay, setVisibleDay] = useState(currentDay);

  // Update visibleDay when the current day changes
  useEffect(() => {
    setVisibleDay(currentDay);
  }, [currentDay]);

  // Handlers to navigate pages
  const handleNext = () => {
    if (visibleDay < currentDay) {
      setVisibleDay(visibleDay + 1);
    }
  };

  const handlePrev = () => {
    if (visibleDay > 1) {
      setVisibleDay(visibleDay - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Joulukalenteri</h1>
      <p>{instructions[visibleDay - 1]}</p>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={handlePrev}
          disabled={visibleDay === 1}
        >
          Edellinen
        </button>
        <button
          style={styles.button}
          onClick={handleNext}
          disabled={visibleDay === currentDay}
        >
          Seuraava
        </button>
      </div>
    </div>
  );
};

// Styling
const styles = {
  container: {
    border: "1px solid #ccc",
    textAlign: "center",
    backgroundColor: "red",
    width: "300px",
    Maxheight: "500px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default InstructionBox;
