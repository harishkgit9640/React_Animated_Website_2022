import React from 'react'
import welcome from '../images/web-dev.svg';
import Common from './Common';

const About = () => {
    return (
        <>
            <Common
                title="Let's Know About"
                desc='Grow Your Business Digitally with Hk Solution'
                imgSrc={welcome}
                visit='/contact'
                btnName="Contact Us"
            />
        </>
    )
}

export default About
