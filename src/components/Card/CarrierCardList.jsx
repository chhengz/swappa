const cardLists = [
    {id: 1, img: "https://static.swappa.com/static/images/carrier/unlocked_btn.svg"},
    {id: 2, img: "https://static.swappa.com/static/images/carrier/att_btn.svg"},
    {id: 3, img: "https://static.swappa.com/static/images/carrier/tmobile_btn.svg"},
    {id: 4, img: "https://static.swappa.com/static/images/carrier/verizon_btn.svg"},
]

const CarrierCardList = () => {
  return (
    <>
        <div className="text-center text-dark mt-2"><h1>Shop Phones by Carrier</h1></div>
      <div className="row row-cols-1 row-cols-md-5 justify-content-center w-50 mx-auto mt-4">
        {
            cardLists.map((card) => (
                <div className="col" key={card.id}>
                    <div className="card">
                        <img src={card.img} className="card-img-top" alt="AT&T" />
                    </div>
                </div>
            ))
        }
        
        
      </div>
      
    </>
  )
}

export default CarrierCardList