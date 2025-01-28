import { Link } from "react-router-dom"

import { featureLists } from "../../Data/Features"


const CardFeature = () => {
    return (
        <>
            <div className="row row-cols row-cols-md-6 justify-content-center mt-5 w-75 mx-auto">
                {
                    featureLists.map((card) => (
                        <div className="col mb-4" key={card.id}>
                            <div className="card p-2">
                                <h3 className="text-center fs-5 ">iPhones</h3>
                                <img src={card.img} className="card-img-top" alt="AT&T" />
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="max-w-3xl mx-auto mt-5">
                <nav className="navbar bg-body-tertiary ">
                    <div className="container">
                        <div className="text-center text-dark">
                            <h3><i className="fa-solid m-2 fa-dollar-sign"></i>Get more green, get paid fast</h3>
                        </div>
                        {/* <button type="button" className="btn btn-outline-secondary">Sell With Swappa<i className="fa-solid fa-arrow-right"></i></button> */}
                        <Link to="/sell" className="btn btn-outline-secondary">Sell With Swappa<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default CardFeature
