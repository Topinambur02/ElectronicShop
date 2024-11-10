import ProductCard from '../../components/product/ProductCard';
import style from "./MainPage.module.css"
import useTitle from '../../hooks/useTitle';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import LoginModal from '../../components/modal/LoginModal';
import { getAllDevices } from '../../http/DeviceApi';
import { observer } from 'mobx-react-lite';

const MainPage = observer(() => {
    useTitle('Главная страница');

    const context = useContext(Context);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        getAllDevices().then(data => context?.deviceStore.setDevices(data))
    }, []);

    if (!context) {
        return null;
    }

    const { userStore } = context;
    const { deviceStore } = context;

    return (
        <main className='flex-1'>

            {!userStore.isAuth && <LoginModal visible={modal} setVisible={setModal} />}

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

                <div className={style.products}>

                    {deviceStore.devices.map(product => <ProductCard className={style.productCard} setModal={setModal} key={product.id} product={product} />)}

                </div>

            </section>

        </main>
    );
});

export default MainPage;