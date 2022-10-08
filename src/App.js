import { useState } from "react";
import SliderForm from "./components/Form/SliderForm";
import quartetLogo from "./assets/quartet-logo.png";
import RecommendationList from "./components/Recommendations/RecommendationList";
import Transition from "react-transition-group/Transition";
import Spinner from './components/UI/Spinner'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [submitted, setSubmitted] = useState(false);
  const submitHandler = (event) => {
    console.log("submitted");
    setSubmitted(true);
  };
  return (
    <div className="App">
     <Spinner/> 
      <header className="App-header">
          <a href="/">
            <img src={quartetLogo} alt="" className="header-icon" />
          </a>        
      </header>
      {!submitted && <SliderForm onSubmit={submitHandler} />}
      <Transition in={submitted} timeout={250} mountOnEnter unmountOnExit>
        {(state) => {
          return <RecommendationList show={state} />;
        }}
      </Transition>
    </div>
  );
}

export default App;
