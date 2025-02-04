import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa6";
import CardLaptops from "../../components/Card/CardLaptops"
import {macbook_laptops, windows_laptops} from "../../Data/products"

const Laptops = () => {
  return (
    <>
        <div className='mb-4'>
            <div className="text-center text-dark mt-4 mb-4"><h3><FaApple /> MacBooks</h3></div>
            
            <div className='mt-4'>
            
                <div className="row row-cols-1 row-cols-md-2 justify-content-center d-flex mt-5 w-75 mx-auto ">
                {
                    macbook_laptops.map((item) => (
                    <CardLaptops  
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                    />
                    ))
                }
                </div>
            </div>
        </div>

        <div className='mb-4'>
            <div className="text-center text-dark mt-4 mb-4"><h3><FaWindows /> Windows Laptops</h3></div>
            
            <div className='mt-4'>
            
                <div className="row row-cols-1 row-cols-md-3 justify-content-center d-flex mt-5 w-75 mx-auto ">
                {
                    windows_laptops.map((item) => (
                    <CardLaptops  
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                    />
                    ))
                }
                </div>
            </div>
        </div>
    </>
  )
}

export default Laptops
