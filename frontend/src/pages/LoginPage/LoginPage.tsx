import LoginForm from '../../components/loginForm/LoginForm';
import useTitle from '../../hooks/useTitle';
import style from './LoginPage.module.css'

const LoginPage = () => {
  useTitle('Авторизация');

  return (
    <div className={style.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;