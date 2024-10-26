import { useEffect, useState } from "react";
import {
  FaExpand,
  FaQrcode,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import imgURL from "../assets/images/avd.jpg";
import "../components/cssComponents/Product.css";

const Product = () => {
  const [product, setProduct] = useState({
    location: "Warehouse A",
    quantity: 100,
    department: "Electronics",
  });

  return (
    <div className="product-main">
      <div className="image-section">
        <img className="product-image" src={imgURL} alt="Product" />
      </div>
      <div className="product-info">
        <h3 className="product-name">Product Name</h3>
        <div className="info-details">
          <p>
            <span className="label">Location:</span>
            {product.location || "N/A"}
          </p>
          <p>
            <span className="label">Quantity:</span>
            {product.quantity || "N/A"}
          </p>
          <p>
            <span className="label">Department:</span>
            {product.department || "N/A"}
          </p>
        </div>
      </div>
      <div className="actions-section">
        <button className="icon-btn qr-btn">
          <FaQrcode />
        </button>
        <button className="icon-btn edit-btn">
          <FaEdit />
        </button>
        <button className="icon-btn trash-btn">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Product;
