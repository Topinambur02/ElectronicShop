import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AboutPage from './components/AboutPage';
import CatalogPage from './components/pages/CatalogPage/CatalogPage';
import ContactsPage from './components/ContactsPage';
import StocksPage from './components/StocksPage';
import LoginPage from './components/LoginPage';
import MainPage from './components/mainPage/MainPage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';

function App() {

  return (
    <div className="app">
      <Header />

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/stock' element={<StocksPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>

      <Footer />

    </div>
  );
}

export default App;
