import { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import style from './CatalogPage.module.css';
import { Context } from '../..';
import ProductCard from '../../components/product/ProductCard';
import { ChevronDown } from 'lucide-react';

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
            <li><ChevronDown /> Цена</li>
            <li><ChevronDown /> Бренд</li>
            <li><ChevronDown /> Рейтинг</li>
            <li><ChevronDown /> Тип устройства</li>
            <li><ChevronDown /> Технические характеристики</li>
            <li><ChevronDown /> Год выпуска</li>
            <li><ChevronDown /> Цвет</li>
            <li><ChevronDown /> Страна производителей</li>
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