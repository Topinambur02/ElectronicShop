import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AppRouter from './components/AppRouter';

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
