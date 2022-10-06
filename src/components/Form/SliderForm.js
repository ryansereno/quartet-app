import { useState } from "react";
import LocationSelector from "./LocationSelector";
import EffectSelector from "./EffectSelector";
import FormIntro from "./FormIntro";
import Transition from "react-transition-group/Transition";

const SliderForm = (props) => {
  const [page, setPage] = useState(1);
  const [allowSlideAdvance, setAllowSlideAdvance] = useState(true);
  const slideForwardHandler = (event) => {
    event.preventDefault();
    setAllowSlideAdvance(false);
    setPage(page + 1);
    setTimeout(() => {
      setAllowSlideAdvance(true);
    }, 260);
  };
  const slideBackHandler = (event) => {
    event.preventDefault();
    setAllowSlideAdvance(false);
    setPage(page - 1);
    setTimeout(() => {
      setAllowSlideAdvance(true);
    }, 260);
  };
  return (
    <form onSubmit={props.onSubmit} className="multi-step-form">
      <Transition in={page === 1} timeout={250} mountOnEnter unmountOnExit>
        {(state) => {
          return <FormIntro slideForward={slideForwardHandler} show={state} />;
        }}
      </Transition>
      <Transition
        in={page === 2 && allowSlideAdvance}
        timeout={250}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return (
            <LocationSelector slideForward={slideForwardHandler} show={state} />
          );
        }}
      </Transition>
      <Transition
        in={page === 3 && allowSlideAdvance}
        timeout={250}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return <EffectSelector slideBack={slideBackHandler} show={state} />;
        }}
      </Transition>
    </form>
  );
};

export default SliderForm;
