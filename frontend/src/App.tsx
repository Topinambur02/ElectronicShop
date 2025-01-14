import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AppRouter from './components/AppRouter';
import ResponsiveMenu from './components/responsiveMenu/ResponsiveMenu';
import { YMaps } from '@pbe/react-yandex-maps';

function App() {

  return (
    <BrowserRouter>
      <YMaps>
        <div className="app">
          <Header />
          <AppRouter />
          <ResponsiveMenu className="responsiveMenu" />
          <Footer />
        </div>
      </YMaps>
    </BrowserRouter>
  );
}

export default App;
