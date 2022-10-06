import Card from "../UI/Card";
const FormIntro = (props) => {
  return (
    <Card>
        <h2>Product recomendations backed by chemistry</h2>
        <button onClick={props.slideForward}>Get Started</button>
    </Card>
  );
};
export default FormIntro;
