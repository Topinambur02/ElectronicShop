import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import style from "./BasketPage.module.css";
import { cartStore } from "../../store/CartStore";
import DeviceCard from "../../components/device/DeviceCard";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import OrderPlacementModal from "../../components/modal/OrderPlacementModal/OrderPlacementModal";

const BasketPage = observer(() => {
  useTitle('Корзина');

  const [isModalVisible, setModalVisible] = useState(false);

  const handleOrderButtonClick = () => {
    setModalVisible(true);
  };

  return (
    <div>
      <h1 className={style.title}>Корзина</h1>

      <div className={style.container}>

        <div className={style.goods}>

          {cartStore.cart.length > 0

            ?
            <div>
              {cartStore.cart.map((item) => <DeviceCard className={style.longCard} key={item.id} device={item} />)}
            </div>
            :
            <div>
              <h2>Тут пока пусто</h2>
              <p className={style.text}>Воспользуйтесь <Link to={"/catalog"}>каталогом</Link></p>
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
            <button onClick={handleOrderButtonClick}>Оформить заказ</button>
          </div>}

      </div>
      <OrderPlacementModal visible={isModalVisible} setVisible={setModalVisible} />
    </div>
  );
});

export default BasketPage;