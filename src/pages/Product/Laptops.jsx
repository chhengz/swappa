import React from 'react'
import { Link } from 'react-router-dom'
import { FaApple, FaChrome } from "react-icons/fa";
import { FaWindows } from "react-icons/fa6";
// import CardLaptops from "../../components/Card/CardLaptops"
import { macbook_laptops, windows_laptops, chromebooks } from "../../Data/products"

const Laptops = () => {
    return (
        <>

            {/* MacBooks */}
            <div className='mb-4'>
                <div className="text-center text-dark mt-4 mb-4"><h3><FaApple /> MacBooks</h3></div>
                <div className='mt-4'>
                    <div className="row row-cols-1 row-cols-md-2 justify-content-center d-flex mt-5 w-75 mx-auto ">
                        {
                            macbook_laptops.map((item) => (
                                <div className="col" key={item.id}>
                                    <Link to={item.category + `/` + id.toString()}>
                                        <div className="card ">
                                            <img src={item.img} className="card-img-top mx-auto mt-4" style={{ width: 140 + `px` }} alt="AT&T" />
                                            <p className="text-center ">{item.title}</p>
                                            <h5 className="text-success mt-2 mx-4">${item.price}</h5>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Android Smartwatch */}

            <div className='mb-4'>
                <div className="text-center text-dark mt-4 mb-4"><h3><FaWindows /> Android Smartwatch</h3></div>
                <div className='mt-4'>
                    <div className="row row-cols-1 row-cols-md-6 justify-content-center d-flex mt-5 w-100 mx-auto ">
                        {
                            windows_laptops.map((item) => (
                                <div className="col" key={item.id}>
                                    <Link to={item.category + `/` + id.toString()}>
                                        <div className="card ">
                                            <img src={item.img} className="card-img-top mx-auto mt-4" style={{ width: 100 + `px` }} alt="AT&T" />
                                            <p className="text-center ">{item.title}</p>
                                            <h5 className="text-success mt-2 mx-4">${item.price}</h5>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* chromebooks */}


            <div className='mb-4'>
                <div className="text-center text-dark mt-4 mb-4"><h3><FaChrome /> chromebooks</h3></div>
                <div className='mt-4'>
                    <div className="row row-cols-1 row-cols-md-6 justify-content-center d-flex mt-5 w-100 mx-auto ">
                        {
                            chromebooks.map((item) => (
                                <div className="col" key={item.id}>
                                    <Link to={item.category + `/` + id.toString()}>
                                        <div className="card ">
                                            <img src={item.img} className="card-img-top mx-auto mt-4" style={{ width: 100 + `px` }} alt="AT&T" />
                                            <p className="text-center ">{item.title}</p>
                                            <h5 className="text-success mt-2 mx-4">${item.price}</h5>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Laptops
