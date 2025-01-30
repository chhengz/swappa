import { Link } from 'react-router-dom'
import { categories } from '../../Data/Categories'

const style = {
    padding: '10px',
    color: 'rgb(135, 9, 9)'
}

const CardCategories = () => {
    return (
        <>
            <div className="buy-sell-save text-center mt-3" style={style}>
                <h1>Buy + Sell + Save</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-4 justify-content-center w-75 mx-auto" >
                {
                    categories.map((category) => (
                        <Link to={category.path} key={category.id}>
                            <div className="col mb-4" >
                                <div className="card card-hover h-50 p-3" >
                                    <img src={category.img} className="card-img-top" alt="card example" />
                                    <div className="card-body">
                                        <h5 className="card-title">{category.title}</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default CardCategories