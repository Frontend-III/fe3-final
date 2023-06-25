import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Layout = ({ children}) => {
    return (
        <div>
            <Navbar />
            <Outlet />
            {children}
            <Footer />
        </div>
    )
}

export default Layout