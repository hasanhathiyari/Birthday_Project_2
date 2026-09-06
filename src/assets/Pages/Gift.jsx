import { useState } from "react";

import BackgroundEffects from "../Components/BackgroundEffects";

const Gift = ({ nextPage }) => {
  const [opening, setOpening] = useState(false);

  const openGift = () => {
    setOpening(true);

    setTimeout(() => {
      nextPage();
    }, 1800);
  };

  return (
    <section className="mission-page gift-page">
      <BackgroundEffects />

      <div className="gift-content">
        <p className="system-label">
          MISSION STATUS: COMPLETE
        </p>

        <h2>
          But one final file remains.
        </h2>

        <div
          className={
            opening
              ? "gift-box opening"
              : "gift-box"
          }
          onClick={openGift}
        >
          <div className="gift-lid" />

          <div className="gift-ribbon" />

          <span>🎀</span>
        </div>

        <button
          className="mission-button"
          onClick={openGift}
        >
          OPEN YOUR GIFT ❤️
        </button>
      </div>
    </section>
  );
};

export default Gift;