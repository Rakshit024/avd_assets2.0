// ProductContainer.jsx
import Product from "../components/Product.jsx";
import "../components/cssComponents/ProductContainer.css";

const ProductContainer = ({ count = 60 }) => {
  const products = Array.from({ length: count });

  return (
    <div className="product-container-main">
      {products.map((_, index) => (
        <Product key={index} />
      ))}
    </div>
  );
};

export default ProductContainer;