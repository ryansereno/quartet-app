import ProductItem from "./ProductItem";
import Card from "../UI/Card";
import classes from "./RecommendationList.module.css"
const names=['100mg CBD Tincture', '1:1 THC/CBD Vaporizer', 'Strawnana Vaporizer', 'Blueberry Haze Flower', '10mg CBD Gummies', '2:1 THC/CBG Lozenges']
let products = [] 
for ( let i = 0; i<7; i++ ){
  const newProduct = {
    name:names[i],
    price: Math.random()*50
  }
 products.push(newProduct)
}
const RecommendationList = (props) => {
  const productsList = products.map((product) => {
    return <ProductItem key={product.name} itemName={product.name} price={product.price} />;
  });
  return (
    <Card>

      <ul>{productsList}</ul>
    </Card>
  );
};

export default RecommendationList;
