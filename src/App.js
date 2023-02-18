import { useState, useEffect } from "react";
import SliderForm from "./components/Form/SliderForm";
import quartetLogo from "./assets/quartet-logo.png";
import RecommendationList from "./components/Recommendations/RecommendationList";
import Transition from "react-transition-group/Transition";
import Modal from "./components/UI/Modal";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
    setIsLoading(false);
    }, submitLoadTime);
  }, [submitted]);

  const submitHandler = (event) => {
    setIsLoading(true);
    setSubmitted(true);
    console.log("submitted");
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  
  const submitLoadTime = 2000

  return (
    <div className="App">
      
      {/*initial loading spinner*/}
      <Transition in={isLoading && !submitted} timeout={1500} mountOnEnter unmountOnExit>
        {(state) => {
          return <Modal show={state} />;
        }}
      </Transition>
  
      {/*submitted loading spinner*/}
      <Transition
        in={submitted && isLoading}
        timeout={submitLoadTime}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return <Modal show={state} />;
        }}
      </Transition>

      <header className="App-header">
        <a href="/">
          <img src={quartetLogo} alt="" className="header-icon" />
        </a>
      </header>

      {!submitted && <SliderForm onSubmit={submitHandler} />}

      <Transition
        in={!isLoading && submitted}
        timeout={250}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          console.log("rec list ", state);
          return <RecommendationList show={state} />;
        }}
      </Transition>

    </div>
  );
}

export default App;
