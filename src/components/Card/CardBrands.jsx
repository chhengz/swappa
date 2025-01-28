import { brands } from "../../Data/Brands"

const CardBrands = () => {
    return (
        <>
            <div className="text-center text-dark mt-2"><h3>Featured Brands</h3></div>
            <div className="row row-cols row-cols-md-6 justify-content-center d-flex mt-5 w-75 mx-auto">
                {
                    brands.map((card) => (
                        <div className="col" key={card.id}>
                            <div className="card">
                                <img src={card.img} className="card-img-top" alt="AT&T" />
                                <p className="text-center text-success">{card.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
// style="width: 170px; justify-content: center;"
export default CardBrands
