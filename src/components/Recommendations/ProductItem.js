import classes from './ProductItem.module.css'
const ProductItem = (props) => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>{props.itemName}</p>
      <p className={classes.price} >${props.price.toFixed(2)}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductItem
