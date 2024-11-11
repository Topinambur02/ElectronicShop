
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import style from "./BasketPage.module.css";
import { cartStore } from "../../store/CartStore";
import ProductCard from "../../components/product/ProductCard";
import { observer } from "mobx-react-lite";

const BasketPage = observer(() => {
  useTitle('Корзина');


  return (
    <div>
      <h1 className={style.title}>Корзина</h1>

      <div className={style.container}>

        <div className={style.goods}>

          {cartStore.cart.length > 0

            ?
            <div>
              {cartStore.cart.map((item) => <ProductCard className={style.longCard} key={item.id} product={item} />)}
            </div>
            :
            <div>
              <h2>Тут пока пусто</h2>
              <p className={style.text}>Воспользуйтесь <Link to={"/catalog"}>каталогом</Link> или поиском</p>
            </div>
          }
        </div>

        {cartStore.cart.length > 0 &&

          <div className={style.orderTerms}>
            <p className={style.text} >Условия заказа</p>
            <div className={style.total}>
              <p>Итого:</p>
              <div>
                {cartStore.cart.reduce((acc, item) => acc + item.price, 0)} ₽
              </div>
            </div>
            <button>Оформить заказ</button>
          </div>}

      </div>

    </div>
  );
});

export default BasketPage;