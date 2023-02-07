import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routeConfig';
console.log(routerConfig)
const AppRouter = () => {
    return (
        <Suspense fallback={<div>...Loading</div>}>
            <Routes>
                {Object.values(routerConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;