import ProductCard from '../../components/product/ProductCard';
import { products } from '../../db/Products';
import style from "./MainPage.module.css"
import useTitle from '../../hooks/useTitle';

const MainPage = () => {
    useTitle('Главная страница');

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

                    {products.map(product => <ProductCard key={product.id} product={product} />)}

                </div>

            </section>

        </main>
    );
};

export default MainPage;