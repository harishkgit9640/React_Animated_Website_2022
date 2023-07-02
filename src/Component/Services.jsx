import React from 'react'
import Card from './Card'
import SData from '../Component/SerData'

const Services = () => {
  return (
    <>
      <section id='services' className=''>
        <div className="my-5">
          <h1 className='text-center text-primary fw-bold'> Our Services </h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row g-3">
                {
                  SData.map((val, index) => {
                    return (
                      <Card key={index}
                        title={val.title}
                        imgSrc={val.imgSrc}
                        visit={val.visit} />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
