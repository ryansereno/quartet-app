import Card from "../UI/Card";
const FormIntro = (props) => {
  const show = props.show === "entering" ? "open" : props.show ==="exiting"? "closed":null
  return (
    <Card style={show}>
        <h2>Product recomendations backed by chemistry</h2>
        <button onClick={props.slideForward}>Get Started</button>
    </Card>
  );
};
export default FormIntro;
