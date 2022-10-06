import Card from "../UI/Card";
import chromatagramImg from '../../assets/Chromatagram.png'
const FormIntro = (props) => {
  const show = props.show === "entering" ? "open" : props.show ==="exiting"? "closed":null
  return (
    <Card style={show}>
        <h2>Product recomendations backed by chemistry</h2>
      <img src={chromatagramImg} alt="chromatagram image" className="form-image" />
        <button onClick={props.slideForward}>Get Started</button>
    </Card>
  );
};
export default FormIntro;
