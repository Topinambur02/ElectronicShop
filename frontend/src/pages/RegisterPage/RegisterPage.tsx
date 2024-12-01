import useTitle from '../../hooks/useTitle';
import style from './RegisterPage.module.css';

const RegisterPage = () => {
  useTitle('Регистрация');

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <h1>Регистрация</h1>
        <form action="/registration" method="post">
          <input type="text" name="login" placeholder="Логин" required />
          <input type="email" name="email" placeholder="Электронная почта" required />

          <div className={style.passwords}>
            <input type="password" name="password" placeholder="Пароль" required />
            <input type="password" name="confirmPassword" placeholder="Подтверждение пароля" required />
          </div>

          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;