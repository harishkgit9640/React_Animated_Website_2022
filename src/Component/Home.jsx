import React from 'react'
import Common from './Common';
import webImg from '../images/developer.png';

const Home = () => {
    return (
        <>
            <Common
                title="Welcome to The Digital World"
                desc='Grow Your Business Digitally with Hk Solution'
                imgSrc={webImg}
                visit='/services'
                btnName="Get started"
            />
        </>
    )
}

export default Home
