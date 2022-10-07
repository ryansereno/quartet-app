import { useState } from "react";
import SliderForm from "./components/Form/SliderForm";
import quartetLogo from "./assets/quartet-logo.png";
import RecommendationList from "./components/Recommendations/RecommendationList";
function App() {
  const [submitted, setSubmitted] = useState(false);
  const submitHandler = (event) => {
    console.log("submitted");
    setSubmitted(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">
          <img src={quartetLogo} alt="" width="8%" />
        </a>{" "}
      </header>
      {!submitted && <SliderForm onSubmit={submitHandler} />}
      {submitted && <RecommendationList />}
    </div>
  );
}

export default App;
