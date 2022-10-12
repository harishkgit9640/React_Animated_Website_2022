import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='w-100 bg-light text-center'>
                <p> &copy; CopyRight 2022 All Rights Resolved || <NavLink to="/">HK Solution</NavLink> </p>
            </footer>
        </>
    )
}

export default Footer
