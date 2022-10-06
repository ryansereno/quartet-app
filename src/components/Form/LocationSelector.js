import Card from "../UI/Card";
const LocationSelector = (props) => {
  return (
    <Card>
      <h2>Select a dispensary</h2>
        <select name="dropdown">
          <option value="Santa Rosa" selected>
            Santa Rosa
          </option>
          <option value="San Francisco">San Francisco</option>
          <option value="Sonoma">Sonoma</option>
        </select>
        <div>
          <button onClick={props.slideForward}>Next</button>
        </div>
    </Card>
  );
};

export default LocationSelector;
