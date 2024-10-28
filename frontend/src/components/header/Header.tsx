import { Link } from 'react-router-dom';
import './Header.module.css';
import { useContext } from 'react';
import { Context } from '../..';

const Header = () => {

  const context = useContext(Context);

  if (!context) {
    return null;
  }

  const { userStore } = context;

  return (
    <header>

      <div className="logo">
        <Link to={"/"}>TechStore</Link>
      </div>

      <nav className='flex ml-80 gap-5'>
        <Link to="/catalog">Каталог</Link>
        <Link to="/stock">Акции</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/about">О нас</Link>
      </nav>

      <div className="flex items-center gap-5">
        <input className='p-1' type="text" placeholder="Поиск" />
        <button>Найти</button>
      </div>

      {userStore.isAuth ?
        <div className='flex gap-5'>
          <Link to="/login">{userStore.user.login}</Link>
          <Link to="/register">Регистрация</Link>
        </div>
        :
        <div className='flex gap-5'>
          <Link to="/login">Вход</Link>
          <Link to="/register">Регистрация</Link>
        </div>
      }


    </header>
  );
};

export default Header;