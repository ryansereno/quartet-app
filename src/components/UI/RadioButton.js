const RadioButton = props =>{
  return(

        <label className="custom-radio">
          <input type="radio" name="effect" />
          <span className="radio-btn">
            <div className="effect-icon">
              <img src={props.image} className="effect-img" alt={props.effectTitle} />
              <h3>{props.effectTitle}</h3>
            </div>
          </span>
        </label>
  )
}
export default RadioButton
