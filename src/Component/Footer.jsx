import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className='w-100 bg-light text-center'>
                <p> &copy; copyrights {year} All Rights Resolved Made with 💘 by <NavLink to="/">HK Solution</NavLink> </p>
            </footer>
        </>
    )
}

export default Footer
