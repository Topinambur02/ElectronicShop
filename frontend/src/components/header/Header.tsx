import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { cartStore } from '../../store/CartStore';

const Header = observer(() => {

  const { userStore } = useContext(Context) || {};

  return (
    <header>

      <div className="logo">
        <Link to={"/"}>TechStore</Link>
      </div>

      <nav className={style.pages}>
        <Link to="/catalog">Каталог</Link>
        <Link to="/stock">Акции</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/about">О нас</Link>
      </nav>

      <div className={style.searchContainer}>
        <input className={style.search} type="text" placeholder="Поиск" />
      </div>

      {userStore?.isAuth ?
        <div className={style.links}>
          <Link to="/profile">{userStore.user.login}</Link>
          <Link to="/basket">Корзина({cartStore.cart.length})</Link>
        </div>
        :
        <div className={style.links}>
          <Link to="/login">Вход</Link>
          <Link to="/register">Регистрация</Link>
        </div>
      }

    </header>
  );
});

export default Header;