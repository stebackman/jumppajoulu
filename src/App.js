import React, { useState } from "react";
import Hatch from "./Hatch";
import "./App.css";
import Instructionbox from "./InstructionBox";

const videos = [
  "https://www.youtube.com/embed/pvIjsG5Svck?si=ht6Bv_mSz_xNLgHJ",
  "https://www.youtube.com/embed/0pkjOk0EiAk?si=MGWngxYxd_ZfkrH1",
  "https://www.youtube.com/embed/aKBxiKs9n8A?si=0Ms4_N_VKX0dzd_U",
  "https://www.youtube.com/embed/z6PJMT2y8GQ?si=b8N09viEElmk1GMD",
  "https://www.youtube.com/embed/nvFm30ZAZRY?si=HOm0ZOXeygnshJf-",
  "https://www.youtube.com/embed/wnuLak2onoA?si=YP6R6oop3N8fbk7f",
  "https://www.youtube.com/embed/xqvCmoLULNY?si=svAKdAqmbjvooPby",
  "https://www.youtube.com/embed/6kALZikXxLc?si=NxjeNgpMX4QUJ4FI",
  "https://www.youtube.com/embed/cqDMYUaIXvw?si=aDDoY47euhI2k-pc",
  "https://www.youtube.com/embed/DbDoBzGY3vo?si=KCcS6FUzhEvldjzY",
  "https://www.youtube.com/embed/l4kQd9eWclE?si=fvGQiLqyHxE0gHtM",
  "https://www.youtube.com/embed/8rgurWd-PB8?si=EaGho9USu1gUg7_8",
  "https://www.youtube.com/embed/tqp5XQPpTxY?si=R838AD6SM_wptG1I",
  "https://www.youtube.com/embed/JyUqwkVpsi8?si=vlNedbzw7lgvc2Ip",
  "https://www.youtube.com/embed/SKRKR-IcTsw?si=eONpIu0QlCymz5i1",
  "https://www.youtube.com/embed/cnyTQDSE884?si=4GbP1VN7tro2f3i5",
  "https://www.youtube.com/embed/3XDriUn0udo?si=URmuHDZCMNvT4ZP0",
  "https://www.youtube.com/embed/XckEEwa1BPI?si=IrFDTbS_b7VfCiDi",
  "https://www.youtube.com/embed/ztTexqGQ0VI?si=Wyr3e8WTkh4ZrAej",
  "https://www.youtube.com/embed/nLNqEQ4B6XI?si=xnhlj2cFhzHTLbZ4",
  "https://www.youtube.com/embed/EsnM8eBtazU?si=jPIlBt74TlXJ9ILq",
  "https://www.youtube.com/embed/0pkjOk0EiAk?si=MGWngxYxd_ZfkrH1",
  "https://www.youtube.com/embed/pvIjsG5Svck?si=ht6Bv_mSz_xNLgHJ",
  "https://www.youtube.com/embed/Lbkd0FUKrCo?si=ciLBq3ZlSwRWiuuS",
];

const backgrounds = [
  "images/ben-den-engelsen-4_pzO3SzDCo-unsplash.jpg",
  "images/daria-glakteeva-UN9tChPV__0-unsplash.jpg",
  "images/earl-wilcox-hZS83qaZqa8-unsplash.jpg",
  "images/eugene-zhyvchik-0O58LvoYdHk-unsplash.jpg",
  "images/humphrey-muleba-w4h99Af51Lg-unsplash.jpg",
  "images/ian-stauffer-U18rvrmRV8Q-unsplash.jpg",
  "images/irena-carpaccio-6zz5nDuGEk8-unsplash.jpg",
  "images/jennifer-bonauer-vnIxbfat7DM-unsplash.jpg",
  "images/jez-timms-cOE85BJq33c-unsplash.jpg",
  "images/joe-green-LKwo0PfwSTs-unsplash.jpg",
  "images/juliana-barquero-E4sLmF9FnVo-unsplash.jpg",
  "images/lydia-matzal-sn1n0LS5FvY-unsplash.jpg",
  "images/markus-spiske-4uPM6GSX0P0-unsplash.jpg",
  "images/markus-spiske-AF_4tBQjdtc-unsplash.jpg",
  "images/markus-spiske-WUsrcGukaQM-unsplash.jpg",
  "images/nathan-dumlao-jyDnMKoeK4U-unsplash.jpg",
  "images/toa-heftiba-BoyJpFL-wU4-unsplash.jpg",
  "images/annie-spratt-cS4fiNSK2c4-unsplash.jpg",
  "images/josh-harrison-jY_fTS7ZE98-unsplash.jpg",
  "images/erin-mckenna-kFbSKhukfIQ-unsplash.jpg",
  "images/mel-poole-LUPXhXj2ip0-unsplash.jpg",
  "images/toa-heftiba-WsDF95mSUsI-unsplash.jpg",
  "images/monika-grabkowska-yuAEcsAe4lk-unsplash.jpg",
  "images/pukki.jpg",
];

function App() {
  const [openedHatches, setOpenedHatches] = useState([]);

  // Get the current date
  const getAvailableHatchIndex = () => {
    const today = new Date();
    const currentMonth = today.getMonth(); // 0 = January, 11 = December
    const currentDay = today.getDate();

    if (currentMonth !== 11) {
      // If it's not December, no hatches are available
      return -1;
    }
    return currentDay - 1; // Convert day of the month to zero-based index
  };
  const openHatch = (index) => {
    const availableHatchIndex = getAvailableHatchIndex();

    if (index <= availableHatchIndex && !openedHatches.includes(index)) {
      setOpenedHatches([...openedHatches, index]);
    } else {
      alert("Eipäs hötkyillä!Mee mielummin MoWelle jos on liikaa energiaa!");
    }
  };

  return (
    <div className="calendar">
      <Instructionbox />
      {Array.from({ length: 24 }).map((_, index) => (
        <Hatch
          key={index}
          index={index}
          video={videos[index]}
          isOpen={openedHatches.includes(index)}
          openHatch={openHatch}
          backgroundImage={backgrounds[index]}
        />
      ))}
    </div>
  );
}

export default App;
