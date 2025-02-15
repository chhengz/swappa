import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { phones } from '../../Data/products';

const PhoneDetails = () => {
    const { id } = useParams();
    const product = phones.find((prod) => prod.id === parseInt(id));

    if (!product) {
        return <div>Product not found!</div>;  // Show this message if the product is not found
    }

  return (
    <div className="row">
        <div className="col-6 p-3">
            <div className="product-details text-center">
                <img src={product.img} alt={product.title} />
            </div>
        </div>
        <div className="col-6">
            <div className='mt-4 '>
               <h1>{product.title}</h1>
                {/* <p>Category: {product.category}</p> */}
                <h3 className='text-success'>Price: ${product.price}</h3>
                {product.stars.map((star, index) => (
                <span className='text-warning' key={index}>&#9733;</span>  
                ))}
            </div>
            <Link to="/phones">Back</Link>
        </div>
    </div>
  )
}

export default PhoneDetails

