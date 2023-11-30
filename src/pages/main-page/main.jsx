import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import Conversion from '../../components/conversion';

import { currenciesFetch, conversionFetch } from '../../redux/actions/main';
import {
  getLoading,
  getCurrenciesList,
  getConversionInfo,
  getLoadingConversion
} from '../../redux/selectors/main';

import './main.scss';

export default function MainPage() {
  const isLoading = useSelector(getLoading);
  const currencies = useSelector(getCurrenciesList);
  const conversionInfo = useSelector(getConversionInfo);
  const isLoadingConversion = useSelector(getLoadingConversion);
  const dispatch = useDispatch();
  const toCurrencyId = 'USD';

  const listOfCurrencies = () => {
    if (!currencies) {
      return null;
    }

    let data = Object.entries(currencies);

    if (!data.length) {
      return null;
    }
    return (
      <ul>
        {data.map((item) => (
          <li key={item[0]}>
            <a href={item[0]} class="c-currency-link">
              {item[1]}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  useEffect(() => {
    dispatch(currenciesFetch());
  }, [dispatch]);

  const getConversion = debounce((amount, fromId) => {
    dispatch(conversionFetch({ amount, fromId }));
  }, 100);

  return (
    <div className="l-container-currencies">
      <div className="l-container-currencies__header">Список валют</div>
      {!isLoading ? (
        <main className="l-container-currencies__main">
          <section className="c-info-currencies">{listOfCurrencies()}</section>
          <section className="c-info-conversion">
            <Conversion
              currencies={currencies}
              getConversion={getConversion}
              conversionInfo={conversionInfo}
              toCurrencyId={toCurrencyId}
              isLoadingConversion={isLoadingConversion}
            />
          </section>
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
