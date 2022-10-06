import { useState } from "react";
import LocationSelector from "./LocationSelector";
import EffectSelector from "./EffectSelector";
import FormIntro from "./FormIntro";

const SliderForm = (props) => {
  const [page, setPage] = useState(1);
  const slideForwardHandler = (event) => {
    event.preventDefault();
    setPage(page + 1);
  };
  const slideBackHandler = (event) => {
    event.preventDefault();
    setPage(page - 1);
  };
  return (
    <form onSubmit={props.onSubmit} className="multi-step-form">
      <FormIntro
        slideForward={slideForwardHandler}
        style={page === 1 ? "open" : "closed"}
      />
      <LocationSelector
        slideForward={slideForwardHandler}
        style={page === 2 ? "open" : "closed"}
      />
      <EffectSelector
        slideBack={slideBackHandler}
        style={page === 3 ? "open" : "closed"}
      />
    </form>
  );
};

export default SliderForm;
