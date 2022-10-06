import Card from "../UI/Card";
const LocationSelector = (props) => {
  const show = props.show === "entering" ? "open" : props.show ==="exiting"? "closed":null
  return (
    <Card style={show}>
      <div className="location-select">

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
      </div>
    </Card>
  );
};

export default LocationSelector;
