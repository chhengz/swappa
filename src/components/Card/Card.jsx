import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Utility function to convert the title into a slug
// const convertToSlug = (title) => {
//   return title
//     .toLowerCase()            
//     .replace(/\s+/g, '-')     
//     .replace(/[^\w\-]+/g, '') 
//     .replace(/\-\-+/g, '-')   
//     .trim();                  
// };

const Card = ({ id, category, img, title, price, stars }) => {
  // Convert the title to slug format
  // const slug = convertToSlug(title);

  return (
    <div className="col" key={id}>
      {/* <Link to={slug.toString()}> */}
      <Link to={category+`/`+id.toString()}>
        <div className="card">
          <img src={img} className="card-img-top mx-auto mt-4" style={{ width: 80 + `px` }} alt="Product" />
          <p className="text-center mt-4">{title}</p>
          <div className="text-center">
            {
              stars.map((star, index) => (
                <i key={index}>
                  <FaStar />
                </i>
              ))
            }
          </div>
          <h5 className="text-success mt-2 mx-4">${price}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Card;
