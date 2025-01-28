
import { Link } from 'react-router-dom'
import {categories} from '../../Data/Categories'

const CardCategories = () => {
    return (
        <>

            
            <div className="row row-cols-1 row-cols-md-4 justify-content-center w-75 mx-auto" >
            {
                categories.map((category) => {
                    return (
                        <Link to={category.path} key={category.id}>
                            <div className="col" >
                            <div className="card h-50 ">
                                <img src={category.img} className="card-img-top" alt="card example" />
                                <div className="card-body">
                                    <h5 className="card-title">{category.title}</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    )
                })
            }
            

            </div>
        </>
    )
}

export default CardCategories