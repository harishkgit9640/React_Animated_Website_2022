import React from 'react'
import ErrorImg from '../images/errorPage.svg';

const Error = () => {
    return (
        <>
            <div className="container m-5 d-flex justify-content-center align-items-center">
                <img src={ErrorImg} alt="error-page" />
            </div>
        </>
    )
}

export default Error
