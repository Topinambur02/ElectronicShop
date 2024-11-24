import AboutPage from "./pages/AboutPage"
import AdminPage from "./pages/AdminPage"
import BasketPage from "./pages/BasketPage/BasketPage"
import CatalogPage from "./pages/CatalogPage/CatalogPage"
import ContactsPage from "./pages/ContactsPage"
import DevicePage from "./pages/DevicePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import MainPage from "./pages/MainPage/MainPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import StocksPage from "./pages/StocksPage"
import { ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, CREATE_DEVICE_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, STOCKS_ROUTE } from "./consts/consts"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import CreateDevicePage from "./pages/CreateDevicePage/CreateDevicePage"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: AdminPage
    },
    {
        path: BASKET_ROUTE,
        Component: BasketPage
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    },
    {
        path: CREATE_DEVICE_ROUTE,
        Component: CreateDevicePage
    }
] 

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegisterPage
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: CONTACTS_ROUTE,
        Component: ContactsPage
    },
    {
        path: STOCKS_ROUTE,
        Component: StocksPage
    },
    {
        path: CATALOG_ROUTE,
        Component: CatalogPage
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutPage
    },
    {
        path: MAIN_ROUTE,
        Component: MainPage
    }
] 