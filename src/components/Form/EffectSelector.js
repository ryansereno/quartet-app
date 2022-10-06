import Card from "../UI/Card";

const EffectSelector = (props) => {
  return (
    <Card>
      <div>
        <div>
          <img src={energy} alt="" />
          <label for="Energy">
            <input type="radio" id="Energy" name="effect" />
            Energy
          </label>
        </div>

        <label for="Sedation">
          <input type="radio" id="Sedation" name="effect" />
          Sedation
        </label>

        <label htmlFor="">
          <input type="radio" name="effect" />
          Pain Management
        </label>

        <label htmlFor="">
          <input type="radio" name="effect" />
          Focus
        </label>

        <label htmlFor="">
          <input type="radio" name="effect" />
          Stress Reduction
        </label>
        <button onClick={props.slideBack}>Back</button>
        <button>Submit</button>
      </div>
    </Card>
  );
};
export default EffectSelector;
