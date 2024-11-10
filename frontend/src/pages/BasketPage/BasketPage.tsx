
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import style from "./BasketPage.module.css";
import { cartStore } from "../../store/CartStore";
import ProductCard from "../../components/product/ProductCard";

const BasketPage = () => {
  useTitle('Корзина');

  return (
    <div>
      <h1 className={style.title}>Корзина</h1>
      <div className={style.container}>

        {cartStore.cart.length > 0

          ?
          cartStore.cart.map((item) => <ProductCard key={item.id} product={item} className={style.longCard} />)
          :
          <div>
            <h2>Тут пока пусто</h2> 
            <p className={style.text}>Воспользуйтесь <Link to={"/catalog"}>каталогом</Link> или поиском</p>
          </div>
        }
      </div>
    </div>
  );
};

export default BasketPage;