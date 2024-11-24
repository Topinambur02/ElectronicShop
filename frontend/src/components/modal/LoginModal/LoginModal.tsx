import { IProps } from '../../../types/LoginModalType';
import LoginForm from '../../loginForm/LoginForm';
import style from './LoginModal.module.css';

const LoginModal = ({ visible, setVisible }: IProps) => {

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