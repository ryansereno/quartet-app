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
    }, 2000);
  }, [submitted]);

  const submitHandler = (event) => {
    setIsLoading(true)

    console.log("submitted");
    setSubmitted(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="App">

      <Transition in={isLoading} timeout={1500} mountOnEnter unmountOnExit>
        {(state) => {
          return <Modal show={state} />;
        }}
      </Transition>
      <Transition in={submitted && isLoading} timeout={2000} mountOnEnter unmountOnExit>
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


      <Transition in={!isLoading && submitted} timeout={250} mountOnEnter unmountOnExit>
        {(state) => {
          console.log('rec list ', state)
          return <RecommendationList show={state} />;
        }}
      </Transition>

    </div>
  );
}

export default App;
