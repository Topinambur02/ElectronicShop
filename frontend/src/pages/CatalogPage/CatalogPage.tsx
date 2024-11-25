import { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import style from './CatalogPage.module.css';
import { Context } from '../..';
import DeviceCard from '../../components/device/DeviceCard';
import { ChevronDown } from 'lucide-react';
import { getAllDevices } from '../../http/DeviceApi';
import { observer } from 'mobx-react-lite';
import { Filters } from '../../types/FiltersType';
import LoginModal from '../../components/modal/LoginModal/LoginModal';
import MySelect from '../../components/MySelect/MySelect';

const CatalogPage = observer(() => {
  useTitle('Каталог');

  const { userStore, deviceStore } = useContext(Context) || {};
  const [modal, setModal] = useState(false);
  const [showFilters, setShowFilters] = useState({
    price: false,
    brand: false,
    rating: false,
    type: false,
    specs: false,
    year: false,
    color: false,
    country: false,
  });
  const [selectedSort, setSelectedSort] = useState('');
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

  const toggleShowFilters = (filter: keyof Filters) => {
    setShowFilters(prevState => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };

  const sortDevices = (sort: string) => {
    setSelectedSort(sort);

    if (sort === 'priceUp') {
      deviceStore?.setDevices([...deviceStore.devices].sort((a, b) => a.price - b.price));
    }

    if (sort === 'name') {
      deviceStore?.setDevices([...deviceStore.devices].sort((a, b) => a.name.localeCompare(b.name)));
    }

    if (sort === 'priceDown') {
      deviceStore?.setDevices([...deviceStore.devices].sort((a, b) => b.price - a.price));
    }

  };

  useEffect(() => {
    getAllDevices().then(data => deviceStore?.setDevices(data));
  }, []);

  const filteredDevices = deviceStore?.devices.filter(device => {
    if (filters.price && device.price >= 1000) return false;
    if (filters.brand && device.brand !== 'Apple') return false;
    if (filters.type && device.type !== 'Смартфон') return false;
    if (filters.year && device.year > 2021) return false;
    if (filters.color && device.color !== 'Черный') return false;
    if (filters.country && device.country !== 'USA') return false;
    return true;
  }) || [];

  console.log(filteredDevices);

  return (
    <div className={style.container}>

      {!userStore?.isAuth && <LoginModal visible={modal} setVisible={setModal} />}

      <div className={style.left}>

        <div className={style.filters}>

          <ul>

            <li onClick={() => toggleShowFilters('price')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Цена</p>
              </div>
              {showFilters.price && 
              <div className={style.inFilter} onClick={e => e.stopPropagation()}>
                <input type="checkbox" checked={filters.price} onChange={() => toggleFilter('price')} />
                <div>до 1000</div>
              </div>}
            </li>

            <li onClick={() => toggleShowFilters('brand')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Производитель</p>
              </div>
              {showFilters.brand && 
              <div className={style.inFilter} onClick={e => e.stopPropagation()}>
                <input type="checkbox" checked={filters.brand} onChange={() => toggleFilter('brand')} />
                <div>Apple</div>
              </div>}
            </li>

            <li onClick={() => toggleShowFilters('type')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Тип</p>
              </div>
              {showFilters.type && 
              <div className={style.inFilter} onClick={e => e.stopPropagation()}>
                <input type="checkbox" checked={filters.type} onChange={() => toggleFilter('type')} />
                <div>Смартфон</div>
              </div>}
            </li>

            <li onClick={() => toggleShowFilters('year')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Год выпуска</p>
              </div>
              {showFilters.year && 
              <div className={style.inFilter} onClick={e => e.stopPropagation()}>
                <input type="checkbox" checked={filters.year} onChange={() => toggleFilter('year')} />
                <div>до 2021</div>
              </div>}
            </li>

            <li onClick={() => toggleShowFilters('color')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Цвет</p>
              </div>
              {showFilters.color && 
              <div className={style.inFilter} onClick={e => e.stopPropagation()}>
                <input type="checkbox" checked={filters.color} onChange={() => toggleFilter('color')} />
                <div>Черный</div>
              </div>}
            </li>

            <li onClick={() => toggleShowFilters('country')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Страна производителей</p>
              </div>
              {showFilters.country && 
              <div className={style.inFilter} onClick={e => e.stopPropagation()}>
                <input type="checkbox" checked={filters.country} onChange={() => toggleFilter('country')} />
                <div>USA</div>
              </div>}
            </li>

          </ul>
        </div>
      </div>

      <div>

        <MySelect 
            value={selectedSort}
            onChange={sortDevices}
            defaultValue='Сортировка'
            options={[
              {value: 'name', name: 'По названию'},
              {value: 'priceUp', name: 'По цене ↗'},
              {value: 'priceDown', name: 'По цене ↘'}
            ]}
        />

        {filteredDevices.map(device => (<DeviceCard setModal={setModal} className={style.longCard} key={device.id} device={device} />))}
      </div>

    </div>
  );
});

export default CatalogPage;