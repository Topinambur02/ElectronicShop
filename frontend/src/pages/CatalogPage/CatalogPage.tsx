import { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import style from './CatalogPage.module.css';
import { Context } from '../..';
import ProductCard from '../../components/product/ProductCard';
import { ChevronDown } from 'lucide-react';
import LoginModal from '../../components/modal/LoginModal';
import { getAllDevices } from '../../http/DeviceApi';
import { observer } from 'mobx-react-lite';
import { Filters } from '../../types/FiltersType';

const CatalogPage = observer(() => {
  useTitle('Каталог');

  const context = useContext(Context);
  const [modal, setModal] = useState(false);
  const [filters, setFilters] = useState({
    price: false,
    brand: false,
    rating: false,
    type: false,
    specs: false,
    year: false,
    color: false,
    country: false,
  });

  const toggleFilter = (filter: keyof Filters) => {
    setFilters((prevFilters: Filters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  useEffect(() => {
    getAllDevices().then(data => context?.deviceStore.setDevices(data));
  }, []);

  if (!context) {
    return null;
  }

  const { userStore, deviceStore } = context;

  return (
    <div className={style.container}>

      {!userStore.isAuth && <LoginModal visible={modal} setVisible={setModal} />}

      <div className={style.left}>

        <div className={style.filters}>

          <ul>

            <li onClick={() => toggleFilter('price')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Цена</p>
              </div>
              {filters.price && <div>от 1000 до 5000</div>}
            </li>

            <li onClick={() => toggleFilter('brand')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Производители</p>
              </div>
              {filters.brand && <div>Apple</div>}
            </li>

            <li onClick={() => toggleFilter('type')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Тип</p>
              </div>
              {filters.type && <div>Смартфон</div>}
            </li>

            <li onClick={() => toggleFilter('year')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Год выпуска</p>
              </div>
              {filters.year && <div>от 4.5 до 5</div>}
            </li>

            <li onClick={() => toggleFilter('color')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Цвет</p>
              </div>
              {filters.color && <div>от 4.5 до 5</div>}
            </li>

            <li onClick={() => toggleFilter('country')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Страна производителей</p>
              </div>
              {filters.country && <div>от 4.5 до 5</div>}
            </li>

          </ul>
        </div>
      </div>

      <div className={style.right}>

        {deviceStore.devices.map(device => (<ProductCard setModal={setModal} className={style.longCard} key={device.id} product={device} />))}

      </div>

    </div>
  );
});

export default CatalogPage;