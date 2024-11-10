
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import style from "./BasketPage.module.css"

const BasketPage = () => {
  useTitle('Корзина');

  return (
    <div>
      <h1 className={style.title}>Корзина</h1>
      <div className={style.container}>
        <h2>Тут пока пусто</h2>
        <p className={style.text}>Воспользуйтесь <Link to={"/catalog"}>каталогом</Link> или поиском</p>
      </div>
    </div>
  );
};

export default BasketPage;