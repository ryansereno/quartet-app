import { useState } from "react";
import LocationSelector from "./LocationSelector";
import EffectSelector from "./EffectSelector";
import FormIntro from "./FormIntro";
import Transition from "react-transition-group/Transition";

const SliderForm = (props) => {
  const [page, setPage] = useState(1);
  const slideForwardHandler = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setPage(page + 1);
    }, 2500);
  };
  const slideBackHandler = (event) => {
    event.preventDefault();
    setPage(page - 1);
  };
  return (
    <form onSubmit={props.onSubmit} className="multi-step-form">
      <Transition in={page === 1} timeout={250} mountOnEnter unmountOnExit>
        {(state) => {
          return <FormIntro slideForward={slideForwardHandler} show={state} />;
        }}
      </Transition>
      <Transition in={page === 2} timeout={250} mountOnEnter unmountOnExit>
        {(state) => {
          return (
            <LocationSelector slideForward={slideForwardHandler} show={state} />
          );
        }}
      </Transition>
      <Transition in={page === 3} timeout={250} mountOnEnter unmountOnExit>
        {(state) => {
          return <EffectSelector slideBack={slideBackHandler} show={state} />;
        }}
      </Transition>
    </form>
  );
};

export default SliderForm;
