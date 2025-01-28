import {CardCategories, CarrierCardList, CardFeature} from "./index"


const style = {
  padding: '10px',
  color: 'rgb(135, 9, 9)'
}

const Home = () => {
  return (
    <>
      <div className="buy-sell-save text-center mt-3" style={style}>
        <h1>Buy + Sell + Save</h1>
      </div>

      <CardCategories />
      <CarrierCardList />
      <CardFeature />

    </>
  )
}

export default Home