import DeviceCard from '../../components/device/DeviceCard';
import style from "./MainPage.module.css"
import useTitle from '../../hooks/useTitle';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { getAllDevices } from '../../http/DeviceApi';
import { observer } from 'mobx-react-lite';
import LoginModal from '../../components/modal/LoginModal/LoginModal';

const MainPage = observer(() => {
    useTitle('Главная страница');

    const { userStore, deviceStore } = useContext(Context) || {};
    const [modal, setModal] = useState(false);

    useEffect(() => {
        getAllDevices().then(data => deviceStore?.setDevices(data))
    }, []);

    return (
        <main className='flex-1'>

            {!userStore?.isAuth && <LoginModal visible={modal} setVisible={setModal} />}

            <section className="categories">
                <h2>Категории товаров</h2>

                <div className={style.categoryButtons} >
                    <button>Ноутбуки</button>
                    <button>Смартфоны</button>
                    <button>Телевизоры</button>
                    <button>Аксессуары</button>
                </div>

            </section>

            <section className="m-5">
                <h2>Популярные товары</h2>

                <div className={style.devices}>

                    {deviceStore?.devices.map(device => <DeviceCard className={style.deviceCard} setModal={setModal} key={device.id} device={device} />)}

                </div>

            </section>

        </main>
    );
});

export default MainPage;