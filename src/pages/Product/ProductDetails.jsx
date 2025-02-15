import React from 'react';
import { useParams } from 'react-router-dom';
import '../../Data/products';


const ProductDetails = () => {
  const { id } = useParams();  // Get the id from the URL
  const product = pixels.find((prod) => prod.id === parseInt(id));  // Find the product by id

  if (!product) {
    return <div>Product not found!</div>;  // Show this message if the product is not found
  }

  return (
    <>
      <div className="product-details">
        <h1>{product.title}</h1>
        <img src={product.img} alt={product.title} />
        <p>Category: {product.category}</p>
        <h3>Price: ${product.price}</h3>
        <div>
          {product.stars.map((star, index) => (
            <span key={index}>&#9733;</span>
          ))}
        </div>
      </div>

      
    </>
  );
};

export default ProductDetails;
