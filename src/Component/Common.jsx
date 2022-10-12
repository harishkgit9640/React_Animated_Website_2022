import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center mb-5'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto d-flex justify-content-between">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.title}<span className='brand_name'> HK SOLUTION </span> </h1>
                                    <h2 className="my-3">{props.desc}</h2>
                                    <div className="mt-2">
                                        <NavLink to={props.visit} className='btn-get-started'>{props.btnName}</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-lg-2 header-img ">
                                    <img src={props.imgSrc} alt="heroImg" className='img-fluid animated' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common
