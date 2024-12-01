import { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import style from './CatalogPage.module.css';
import { Context } from '../..';
import DeviceCard from '../../components/device/DeviceCard';
import { ChevronDown } from 'lucide-react';
import { getAllDevices } from '../../http/DeviceApi';
import { observer } from 'mobx-react-lite';
import { Filters } from '../../types/FiltersType';
import { Range } from 'react-range';
import LoginModal from '../../components/modal/LoginModal/LoginModal';
import MySelect from '../../components/MySelect/MySelect';

const CatalogPage = observer(() => {
  useTitle('Каталог');

  const { userStore, deviceStore } = useContext(Context) || {};
  const [modal, setModal] = useState(false);
  const [showFilters, setShowFilters] = useState({
    price: false,
    brand: false,
    type: false,
    year: false,
    color: false,
    country: false,
  });
  const [selectedSort, setSelectedSort] = useState('');
  const [filters, setFilters] = useState<Filters>({
    price: { min: 0, max: 10000 },
    brand: [],
    type: [],
    year: { min: 2000, max: 2023 },
    color: [],
    country: [],
  });

  const toggleFilter = (filter: keyof Filters, value: any) => {
    setFilters((prevFilters: Filters) => ({
      ...prevFilters,
      [filter]: value,
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
    if (device.price < filters.price.min || device.price > filters.price.max) return false;
    if (filters.brand.length > 0 && !filters.brand.includes(device.brand)) return false;
    if (filters.type.length > 0 && !filters.type.includes(device.type)) return false;
    if (device.year < filters.year.min || device.year > filters.year.max) return false;
    if (filters.color.length > 0 && !filters.color.includes(device.color)) return false;
    if (filters.country.length > 0 && !filters.country.includes(device.country)) return false;
    return true;
  }) || [];

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
                <div onClick={e => e.stopPropagation()}>
                  <Range
                    values={[filters.price.min, filters.price.max]}
                    step={100}
                    min={0}
                    max={10000}
                    onChange={(values) => toggleFilter('price', { min: values[0], max: values[1] })} 

                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: '16px',
                          width: '16px',
                          backgroundColor: '#2c3e50',
                          borderRadius: '50%',
                        }}
                      />
                    )}
                    
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: '6px',
                          width: '50%',
                          marginTop: '15px',
                          marginBottom: '5px',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          backgroundColor: 'cornflowerblue',
                        }}
                      >
                        {children}
                      </div>
                    )}
                    />
                  <div>От {filters.price.min} до {filters.price.max}</div>
                </div>}
            </li>

            <li onClick={() => toggleShowFilters('brand')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Производитель</p>
              </div>
              {showFilters.brand &&
                <div onClick={e => e.stopPropagation()}>
                  {['Apple', 'Samsung', 'Xiaomi'].map(brand => (
                    <div className={style.inFilter} key={brand}>
                      <input
                        type="checkbox"
                        checked={filters.brand.includes(brand)}
                        onChange={(e) => toggleFilter('brand', e.target.checked ? [...filters.brand, brand] : filters.brand.filter(b => b !== brand))}
                      />
                      <div>{brand}</div>
                    </div>
                  ))}
                </div>}
            </li>

            <li onClick={() => toggleShowFilters('type')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Тип</p>
              </div>
              {showFilters.type &&
                <div onClick={e => e.stopPropagation()}>
                  {['Смартфон', 'Ноутбук', 'Планшет'].map(type => (
                    <div className={style.inFilter} key={type}>
                      <input
                        type="checkbox"
                        checked={filters.type.includes(type)}
                        onChange={(e) => toggleFilter('type', e.target.checked ? [...filters.type, type] : filters.type.filter(t => t !== type))}
                      />
                      <div>{type}</div>
                    </div>
                  ))}
                </div>}
            </li>

            <li onClick={() => toggleShowFilters('year')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Год выпуска</p>
              </div>
              {showFilters.year &&
                <div onClick={e => e.stopPropagation()}>
                  <Range
                    values={[filters.year.min, filters.year.max]}
                    step={1}
                    min={2000}
                    max={2024}
                    onChange={(values) => toggleFilter('year', { min: values[0], max: values[1] })} 

                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: '16px',
                          width: '16px',
                          backgroundColor: '#2c3e50',
                          borderRadius: '50%',
                        }}
                      />
                    )}
                    
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: '6px',
                          width: '50%',
                          marginTop: '15px',
                          marginBottom: '5px',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          backgroundColor: 'cornflowerblue',
                        }}
                      >
                        {children}
                      </div>
                    )}
                    />
                  <div>От {filters.year.min} до {filters.year.max}</div>
                </div>}
            </li>

            <li onClick={() => toggleShowFilters('color')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Цвет</p>
              </div>
              {showFilters.color &&
                <div onClick={e => e.stopPropagation()}>
                  {['Черный', 'Белый', 'Синий'].map(color => (
                    <div className={style.inFilter} key={color}>
                      <input
                        type="checkbox"
                        checked={filters.color.includes(color)}
                        onChange={(e) => toggleFilter('color', e.target.checked ? [...filters.color, color] : filters.color.filter(c => c !== color))}
                      />
                      <div>{color}</div>
                    </div>
                  ))}
                </div>}
            </li>

            <li onClick={() => toggleShowFilters('country')}>
              <div className={style.oneFilter}>
                <ChevronDown />
                <p>Страна производителей</p>
              </div>
              {showFilters.country &&
                <div onClick={e => e.stopPropagation()}>
                  {['USA', 'China', 'South Korea'].map(country => (
                    <div className={style.inFilter} key={country}>
                      <input
                        type="checkbox"
                        checked={filters.country.includes(country)}
                        onChange={(e) => toggleFilter('country', e.target.checked ? [...filters.country, country] : filters.country.filter(c => c !== country))}
                      />
                      <div>{country}</div>
                    </div>
                  ))}
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
            { value: 'name', name: 'По названию' },
            { value: 'priceUp', name: 'По цене ↗' },
            { value: 'priceDown', name: 'По цене ↘' }
          ]}
        />

        {filteredDevices.map(device => (<DeviceCard setModal={setModal} className={style.longCard} key={device.id} device={device} />))}
      </div>

    </div>
  );
});

export default CatalogPage;