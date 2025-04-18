import { Outlet } from "react-router-dom";

import React from "react";
import Header from "./Header/Header";

const Layout = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout
