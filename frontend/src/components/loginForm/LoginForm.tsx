import { Link } from 'react-router-dom';
import style from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div className={style.formContainer} onClick={(e) => e.stopPropagation()}>
        <h1>Авторизация</h1>
        <form action="/submit-registration" method="post">
          <input type="text" name="login" placeholder="Логин" required />

          <input type="password" name="password" placeholder="Пароль" required />

          <div className='text-slate-500'>or <Link className='underline' to={"/register"}>signUp</Link></div>

          <button type="submit">Войти</button>
        </form>
      </div>
  );
}

export default LoginForm;