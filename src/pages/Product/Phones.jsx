import React from 'react'
import CarrierCardList from '../../components/Card/CarrierCardList'
import { phones } from '../../Data/products'
import { FaStar } from "react-icons/fa";

const Phones = () => {
  return (
    <div>
        <div className="text-center text-dark mt-2"><h3>Phones For Sale</h3></div>
        <div className="text-center text-dark mt-2">
            <p>Best deals on cheap phones and used phones.</p>
        </div>

        {/*  */}
        <CarrierCardList />


        <div className=''>
            <div className="text-center text-dark mt-4"><h1><i className="fa-solid fa-mobile-screen-button mx-3"></i>iPhones</h1></div>

            <div className="row row-cols-1 row-cols-md-6 justify-content-center d-flex mt-5 w-75 mx-auto ">
              {
                phones.map((item) => (
                  <div className="col" key={item.id}>
                  <div className="card ">
                    <img src={item.img} className="card-img-top mx-auto mx-auto mt-4" style={{width: 80+`px`}} alt="AT&T" />
                    <p className="text-center  mt-4">{item.title}</p>
                    <div className="text-center">
                      {
                        item.stars.map((star, index) => (
                          <i key={index}>
                            <FaStar />
                          </i>
                        ))
                      }
                    </div>
                    <h5 className="text-success mt-2 mx-4">${item.price}</h5>
                  </div>
                </div>
                ))
              }
              {/* <div className="col">
                <div className="card ">
                  <img src="https://static.swappa.com/images/cache/ff/8a/ff8a5ae67dcf5719ce7d059b82259dc6.png" className="card-img-top mx-auto mx-auto mt-4" style={{width: 80+`px`}} alt="AT&T" />
                  <p className="text-center  mt-4">Apple iPhone 16 Pro</p>
                  <div className="text-center">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <h5 className="text-success mt-2 mx-4">$767</h5>
                </div>
              </div> */}
          </div>

        </div>
      
    </div>
  )
}

export default Phones
