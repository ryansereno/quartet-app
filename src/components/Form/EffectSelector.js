import Card from "../UI/Card";
import RadioButton from '../UI/RadioButton'
import energyIcon from "../../assets/energy.png";
import sleepIcon from "../../assets/sleep.png";
import focusIcon from "../../assets/focus.png";
import painIcon from "../../assets/pain.png";
import stressIcon from "../../assets/stress.png";

const effects = [
  "Energy",
  "Sedation",
  "Pain Management",
  "Focus",
  "Stress Reduction",
];

const EffectSelector = (props) => {
  return (
    <Card>
      
      <div className="radio-buttons">
      <RadioButton effectTitle="Energy" image={energyIcon} />
      <RadioButton effectTitle="Sleep" image={sleepIcon} />
      <RadioButton effectTitle="Focus" image={focusIcon} />
      <RadioButton effectTitle="Pain Management" image={painIcon} />
      <RadioButton effectTitle="Stress Reduction" image={stressIcon} />

        <button onClick={props.slideBack}>Back</button>
        <button>Submit</button>
      </div>
    </Card>
  );
};
export default EffectSelector;
