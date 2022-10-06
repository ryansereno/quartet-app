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
      {page === 1 && <FormIntro slideForward={slideForwardHandler} />}
      {page === 2 && <LocationSelector slideForward={slideForwardHandler} />}
      {page === 3 && <EffectSelector slideBack={slideBackHandler} />}{" "}
    </form>
  );
};

export default SliderForm;
