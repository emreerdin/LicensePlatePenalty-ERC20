import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./allRoutes";

const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                {routes.map((route, idx) => (
                    <Route
                        path={route.path}
                        element={route.component}
                        key={idx}
                    />
                ))}
            </Routes>
        </React.Fragment>
    )
}

export default Index;