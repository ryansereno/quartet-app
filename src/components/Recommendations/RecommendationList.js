import ProductItem from "./ProductItem";
import Card from "../UI/Card";
import classes from "./RecommendationList.module.css"

const products = [{ name: "OG Kush Flower", price: 23.0 }];
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
