import { useContext } from "react";
import useTitle from "../../hooks/useTitle";
import style from "./ProfilePage.module.css";
import { Context } from "../..";
import useRole from "../../hooks/useRole";
import { useNavigate } from "react-router-dom";
import { CREATE_DEVICE_ROUTE } from "../../consts/consts";

const ProfilePage = () => {
  useTitle('Профиль');

  const { userStore } = useContext(Context) || {};
  const role = useRole(userStore);
  const navigate = useNavigate();

  const handleAddDevice = () => {
    navigate(CREATE_DEVICE_ROUTE);
  };

  return (
    <div className={style.profilePage}>
      <div className={style.profileInfo}>

        <div className={style.profileAvatar}>
          <img src={userStore?.user.avatar} alt="Аватар пользователя" />
        </div>

        <div className={style.profileDetails}>
          <h2>{userStore?.user.login}</h2>
          <p>Email: {userStore?.user.email}</p>

          <div className={style.buttons}>
            {
              role === 'ADMIN'
              &&
              <button className={style.addDeviceButton} onClick={handleAddDevice} >Добавить товар</button>
            }
            <button className={style.editButton}>Редактировать профиль</button>
            <button className={style.logoutButton}>Выйти из аккаунта</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;