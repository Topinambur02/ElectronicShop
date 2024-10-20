import useTitle from '../../hooks/useTitle';
import style from './LoginPage.module.css'

const LoginPage = () => {
  useTitle('Авторизация');

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <h1>Авторизация</h1>
        <form action="/submit-registration" method="post">
          <input type="text" name="login" placeholder="Логин" required />

          <input type="password" name="password" placeholder="Пароль" required />

          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;