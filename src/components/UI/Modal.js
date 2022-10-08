import Spinner from "./Spinner";
const Modal = (props) => {
  const show =
    props.show === "entering"
      ? "modal-open"
      : props.show === "entered"
      ? "modal-open"
      : props.show === "exiting"
      ? "modal-closed"
      : null;
  return (
    <div className={`modal ${show}`}>
      <Spinner />
    </div>
  );
};
export default Modal;
