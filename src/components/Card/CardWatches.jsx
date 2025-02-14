import React from 'react'

const CardWatches = ({ id, img, title, price }) => {
  return (
    <div>

      <div className="col" key={id}>
        <div className="card ">
          <img src={img} className="card-img-top mx-auto mt-4" style={{ width: 140 + `px` }} alt="AT&T" />
          <p className="text-center ">{title}</p>
          <h5 className="text-success mt-2 mx-4">${price}</h5>
        </div>
      </div>

    </div>
  )
}

export default CardWatches



