import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { laptops } from "../../Data/data";
import { Link } from "react-router-dom";


const LaptopDetails = () => {
//     const navigate = useNavigate();
//     const location = useLocation();

//   useEffect(() => {
//     const handleRouteChange = () => {
//       // Logic to refresh the route if it's the same as the current one
//       navigate(location.pathname, { replace: true });
//       window.location.reload();
//     };

//     handleRouteChange();
//   }, [navigate, location]);

    const { id } = useParams();
    const laptop = laptops.find((prod) => prod.id === parseInt(id));

    if (!laptops) {
        return <div>Product not found!</div>; // Show this message if the product is not found
    }

    return (
        <>
            <div className="row">
                <div className="col-6 p-3">
                    <div className="product-details text-center">
                        <img src={laptop.img} alt={laptop.title} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="mt-4 ">
                        <h1>{laptop.title}</h1>
                        {/* <p>Category: {product.category}</p> */}
                        <h3 className="text-success">Price: ${laptop.price}</h3>
                        {/* {laptop.stars.map((star, index) => (
                <span className='text-warning' key={index}>&#9733;</span>  
                ))} */}
                        <Link to="/laptop">Back</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LaptopDetails;
