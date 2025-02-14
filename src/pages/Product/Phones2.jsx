import React from 'react'
import CarrierCardList from '../../components/Card/CarrierCardList'
import { phones } from '../../Data/products'
import Card from '../../components/Card/Card';

const Phones = () => {
  return (
    <div>
        <div className="text-center text-dark mt-2"><h3>Phones For Sale</h3></div>
        <div className="text-center text-dark mt-2">
            <p>Best deals on cheap phones and used phones.</p>
        </div>

        {/* Carrier Card List */}
        <CarrierCardList />

        {/* iPhones Section */}
        <div className=''>
            <div className="text-center text-dark mt-4">
                <h1><i className="fa-solid fa-mobile-screen-button mx-3"></i>iPhones</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-6 justify-content-center d-flex mt-5 w-75 mx-auto">
              {
                phones.filter(item => item.category === 'iphone').map((item) => (
                  <Card  
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    stars={item.stars}
                    category={item.category}
                  />
                ))
              }
            </div>
        </div>

        {/* Samsung Phones Section */}
        <div className='mt-4'>
            <div className="text-center text-dark mt-4">
                <h1><i className="fa-solid fa-mobile-screen-button mx-3"></i>Samsung Phones</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-6 justify-content-center d-flex mt-5 w-75 mx-auto">
              {
                phones.filter(item => item.category === 'samsung').map((item) => (
                  <Card  
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    stars={item.stars}
                    category={item.category}
                  />
                ))
              }
            </div>
        </div>

        {/* Google Pixel Section */}
        <div className='mt-4'>
            <div className="text-center text-dark mt-4">
                <h1><i className="fa-solid fa-mobile-screen-button mx-3"></i>Google Pixels</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-6 justify-content-center d-flex mt-5 w-75 mx-auto">
              {
                phones.filter(item => item.category === 'pixel').map((item) => (
                  <Card  
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    stars={item.stars}
                    category={item.category}
                  />
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Phones;
