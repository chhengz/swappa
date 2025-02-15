import React from 'react'
import {Link} from 'react-router-dom'

const CardWatches = ({ id, img, title, price, category }) => {
  return (
    <div className="col" key={id}>
      <Link to={category + `/` + id.toString()}>
        <div className="card ">
          <img src={img} className="card-img-top mx-auto mt-4" style={{ width: 140 + `px` }} alt="AT&T" />
          <p className="text-center ">{title}</p>
          <h5 className="text-success mt-2 mx-4">${price}</h5>
        </div>
        </Link>
    </div>
  )
}

export default CardWatches



