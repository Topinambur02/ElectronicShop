import { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import style from './CatalogPage.module.css';
import { Context } from '../..';
import ProductCard from '../../components/product/ProductCard';

const CatalogPage = () => {
  useTitle('Каталог');

  const context = useContext(Context);

  if (!context) {
    return null;
  }

  const { deviceStore } = context;

  return (
    <div className={style.container}>

      <div className={style.left}>

        <div className={style.filters}>

          <ul>
            <li>Цена</li>
            <li>Бренд</li>
            <li>Рейтинг</li>
            <li>Тип устройства</li>
            <li>Технические характеристики</li>
            <li>Год выпуска</li>
            <li>Цвет</li>
            <li>Страна производителей</li>
          </ul>

        </div>
      </div>

      <div className={style.right}>

        {deviceStore.devices.map((device) => (<ProductCard className={style.longCard} key={device.id} product={device} />))}

      </div>

    </div>
  );
};

export default CatalogPage;