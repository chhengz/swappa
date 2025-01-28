import { Link } from "react-router-dom"



const featureLists = [
    {
        id: 1,
        path: '',
        title: "iPhones",
        img: "https://static.swappa.com/static/images/categories/retro/category_iphones_300x300.png",
    },
    {
        id: 2,
        path: '',
        title: "Computer+GPUs",
        img: "https://static.swappa.com/static/images/categories/retro/category_computers_300x300.png",
    },
    {
        id: 3,
        path: '',
        title: "Watchs",
        img: "https://static.swappa.com/static/images/categories/retro/category_wearables_300x300.png"
    },
    {
        id: 4,
        path: '',
        title: "iPads+Tablets",
        img: "https://static.swappa.com/static/images/categories/retro/category_tablets_300x300.png"
    },
    {
        id: 5,
        path: '',
        title: "Video Games",
        img: "https://static.swappa.com/static/images/categories/retro/category_gaming_300x300.png"
    },
    {
        id: 6,
        path: '',
        title: "Home Tech",
        img: "https://static.swappa.com/static/images/categories/retro/category_home_tech_300x300.png"
    },
    {
        id: 7,
        path: '',
        title: "Cameras+Lenses",
        img: "https://static.swappa.com/static/images/categories/retro/category_cameras_300x300.png"
    },
    {
        id: 8,
        path: '',
        title: "AirPods+Audio",
        img: "https://static.swappa.com/static/images/categories/retro/category_audio_300x300.png"
    },
    {
        id: 9,
        path: '',
        title: "Drones",
        img: "https://static.swappa.com/static/images/categories/retro/category_drones_300x300.png"
    },
    {
        id: 10,
        path: '',
        title: "Fitness+Cycling",
        img: "https://static.swappa.com/static/images/categories/retro/category_fitness_300x300.png"
    },
    {
        id: 11,
        path: '',
        title: "Power Tools",
        img: "https://static.swappa.com/static/images/categories/retro/category_power_tools_300x300.png"
    },
    {
        id: 12,
        path: '',
        title: "Sneakers",
        img: "https://static.swappa.com/static/images/categories/retro/category_shoes_300x300.png"
    }
]

const CardFeature = () => {
    return (
        <>
            <div className="row row-cols row-cols-md-6 justify-content-center mt-5 w-75 mx-auto">
                {
                    featureLists.map((card) => (
                        <div className="col" key={card.id}>
                            <div className="card">
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
