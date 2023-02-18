import ProductItem from "./ProductItem";
import Card from "../UI/Card";
import classes from "./RecommendationList.module.css"
const names=['100mg CBD Tincture', '1:1 THC/CBD Vaporizer', 'Strawnana Vaporizer', 'Blueberry Haze Flower', '10mg CBD Gummies', '2:1 THC/CBG Lozenges']
let products = [] 
for ( let i = 0; i<6; i++ ){
  const newProduct = {
    name:names[i],
    price: Math.floor(Math.random()*40)+10
  }
 products.push(newProduct)
}
const RecommendationList = (props) => {
  const productsList = products.map((product) => {
    return <ProductItem key={product.name} itemName={product.name} price={product.price} />;
  });
  const show = props.show === "entering" ? "entering" :props.show==="entered"? "open": props.show=== "exiting"? "closed" : null
  return (
    <Card style={show}>

<h2>Product Recomendations</h2>
      <ul>{productsList}</ul>
    </Card>
  );
};

export default RecommendationList;
