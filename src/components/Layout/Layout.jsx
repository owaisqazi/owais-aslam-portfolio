import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
    return (
        <>
            {/* <main id="wrapper"> */}
            <Header />
            <canvas className="cursor-trail d-none d-xl-block" id="trail"></canvas>
            {children}
            <Footer />
            {/* </main> */}
        </>
    );
};

export default Layout;
