import style from './LoginModal.module.css';
import LoginForm from '../loginForm/LoginForm';

const LoginModal = ({ visible, setVisible }: any) => {

    const rootClasses = [style.modal];

    if (visible) {
        rootClasses.push(style.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <LoginForm />
        </div>
    );
}

export default LoginModal;