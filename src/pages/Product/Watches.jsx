import React from 'react'
import CardWatches from "../../components/Card/CardWatches"
import {appple_watches, android_smartwatch, fitness} from "../../Data/products"

const Watches = () => {
    return (
      <>
          <div className='mb-4'>
              <div className="text-center text-dark mt-4 mb-4"><h3>Apple_Watches</h3></div>
              <div className='mt-4'>
                  <div className="row row-cols-1 row-cols-md-2 justify-content-center d-flex mt-5 w-75 mx-auto ">
                  {
                      appple_watches.map((item) => (
                      <CardWatches 
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

          {/* Android Smartwatch */}
          <div className='mb-4'>
              <div className="text-center text-dark mt-4 mb-4"><h3> Android_Smartwatch</h3></div>
              <div className='mt-4'>
                  <div className="row row-cols-1 row-cols-md-6 justify-content-center d-flex mt-5 w-100 mx-auto ">
                  {
                      android_smartwatch.map((item) => (
                      <CardWatches 
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

          {/* Fitness tracker */}

          <div className='mb-4'>
              <div className="text-center text-dark mt-4 mb-4"><h3> Fitness Trackers</h3></div>
              <div className='mt-4'>
                  <div className="row row-cols-1 row-cols-md-6 justify-content-center d-flex mt-5 w-100 mx-auto ">
                  {
                      fitness.map((item) => (
                      <CardWatches 
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
  
  export default Watches
  
