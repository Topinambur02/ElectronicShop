import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AppRouter from './components/AppRouter';
import ResponsiveMenu from './components/responsiveMenu/ResponsiveMenu';

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <AppRouter />
        <ResponsiveMenu className="responsiveMenu" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
