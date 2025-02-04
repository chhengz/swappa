import { FaStar } from "react-icons/fa";

const Card = ({id, img, title, price, stars}) => {

  return (
    <div>
      
                        <div className="col" key={id}>
                        <div className="card ">
                          <img src={img} className="card-img-top mx-auto mx-auto mt-4" style={{width: 80+`px`}} alt="AT&T" />
                          <p className="text-center  mt-4">{title}</p>
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
                      </div>
                      
    </div>
  )
}

export default Card
