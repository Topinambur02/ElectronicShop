import ProductCard from '../../components/product/ProductCard';
import style from "./MainPage.module.css"
import useTitle from '../../hooks/useTitle';
import { useContext } from 'react';
import { Context } from '../..';

const MainPage = () => {
    useTitle('Главная страница');

    const context = useContext(Context);

    if (!context) {
        return null;
    }

    const { deviceStore } = context;

    return (
        <main className='flex-1'>
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

                    {deviceStore.devices.map(product => <ProductCard className={style.longCard} key={product.id} product={product} />)}

                </div>

            </section>

        </main>
    );
};

export default MainPage;