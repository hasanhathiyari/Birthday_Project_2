import BackgroundEffects from "../Components/BackgroundEffects";

const TestComplete = ({ nextPage }) => {
  return (
    <section className="mission-page test-complete-page">
      <BackgroundEffects />

      <div className="complete-content">
        <p className="system-label">
          MISSION STATUS: SUCCESS
        </p>

        <h1>TEST COMPLETE 🎉</h1>

        <div className="heart-row">
          ❤️ ❤️ ❤️ ❤️ ❤️
        </div>

        <p className="complete-message">
          Congratulations, Abbas! Your husband privileges have been
          successfully renewed. 😂❤️
        </p>

        <p className="complete-subtext">
          You have officially passed all the tests.
          There is absolutely no escape now. 💀😂
        </p>

        <button
          className="mission-button"
          onClick={nextPage}
        >
          CONTINUE MISSION →
        </button>
      </div>
    </section>
  );
};

export default TestComplete;