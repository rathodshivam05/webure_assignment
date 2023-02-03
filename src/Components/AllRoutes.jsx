import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Blog from './Blog';
import Stories from './Stories';
import Services from './Services';
import Careers from './Careers';
import Contact from './Contact';
import Talk from './Talk';

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/blog"} element={<Blog />} />
                <Route path={"/careers"} element={<Careers />} />
                <Route path={"/stories"} element={<Stories />} />
                <Route path={"/services"} element={<Services />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/talk"} element={<Talk />} />
            </Routes>
        </>
    )
}

export default AllRoutes
