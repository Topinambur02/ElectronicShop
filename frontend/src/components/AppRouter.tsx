import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../Routes";
import { useContext } from "react";
import { Context } from "..";

const AppRouter = () => {

    const context = useContext(Context);

    if (!context) {
        return null;
    }

    const { user } = context;

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} Component={Component} />
            ))};
            
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} Component={Component} />
            ))}
        </Routes>
    );
};

export default AppRouter;