import { useState } from "react";

import PrivateTransmission from "./assets/Pages/PrivateTransmission";
import LoveQuestion from "./assets/Pages/LoveQuestion";
import Initializing from "./assets/Pages/Initializing";
import SubjectData from "./assets/Pages/SubjectData";
import Observations from "./assets/Pages/Observations";
import MemoryVault from "./assets/Pages/MemoryGallery";
import Quiz from "./assets/Pages/Quiz";
import TestComplete from "./assets/Pages/Testcomplete";
import Gift from "./assets/Pages/Gift";
import FinalMessage from "./assets/Pages/FinalMessage";

import PageTransition from "./assets/Components/PageTransition";
import SmoothScroll from "./assets/Components/SmoothScroll";

import "./App.css";

function App() {
  const [page, setPage] = useState("intro");

  const goToPage = (nextPage) => {
    setPage(nextPage);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const renderPage = () => {
    switch (page) {
      case "intro":
        return (
          <PrivateTransmission
            nextPage={() => goToPage("love-question")}
          />
        );

      case "love-question":
        return (
          <LoveQuestion
            nextPage={() => goToPage("initializing")}
          />
        );

      case "initializing":
        return (
          <Initializing
            nextPage={() => goToPage("subject-data")}
          />
        );

      case "subject-data":
        return (
          <SubjectData
            nextPage={() => goToPage("observations")}
          />
        );

      case "observations":
        return (
          <Observations
            nextPage={() => goToPage("memory-vault")}
          />
        );

      case "memory-vault":
        return (
          <MemoryVault
            nextPage={() => goToPage("quiz")}
          />
        );

      case "quiz":
        return (
          <Quiz
            nextPage={() => goToPage("test-complete")}
          />
        );

      case "test-complete":
        return (
          <TestComplete
            nextPage={() => goToPage("gift")}
          />
        );

      case "gift":
        return (
          <Gift
            nextPage={() => goToPage("final-message")}
          />
        );

      case "final-message":
        return <FinalMessage />;

      default:
        return (
          <PrivateTransmission
            nextPage={() => goToPage("love-question")}
          />
        );
    }
  };

  return (
    <SmoothScroll>
      <main className="app">
        <PageTransition key={page} pageKey={page}>
          {renderPage()}
        </PageTransition>
      </main>
    </SmoothScroll>
  );
}

export default App;