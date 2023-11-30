import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { customRangeAgoISODate } from '../../utils/common'
import { NAV } from '../../utils/urls';

import { currencyFetchById } from '../../redux/actions/currency';
import { getLoading, getCurrency } from '../../redux/selectors/currency';
import './currency.scss';
const LazyLoadedChart = lazy(() => import('../../components/chart'));

export default function CurrencyPage() {
  let { currencyId } = useParams();
  const toCurrencyId = 'USD';

  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const currencyInfo = useSelector(getCurrency);


  const currencyRates = currencyInfo.rates ? Object.entries(currencyInfo.rates).map(item => ({ date: new Date(item[0]).getTime(), value: item[1][toCurrencyId] })) : []

  const [selectedRange, setSelectedRange] = useState(30);

  const handleSelectChange = (event) => {
    setSelectedRange(event.target.value);
  };

  useEffect(() => {
    const daysInISO = customRangeAgoISODate(selectedRange)
    dispatch(currencyFetchById({ dateFrom: daysInISO, fromId: currencyId, toId: toCurrencyId }));
  }, [dispatch, selectedRange]);


  return (
    <div className="l-container-currency">
      <div className="l-container-currency__header">
        <h1>Колебания курсов {currencyId}/{toCurrencyId}</h1>
        <div className="c-info-range">
          <label htmlFor="range">Выберите диапазон</label>
          <select id="range" value={selectedRange} onChange={handleSelectChange}>
            <option value="7">7 дней</option>
            <option value="30">30 дней</option>
            <option value="90">90 дней</option>
            <option value="180">180 дней</option>
            <option value="360">1 год</option>
          </select>
        </div>
        <a className="c-back-button" href={NAV.empty()}>Назад</a>
      </div>
      {!isLoading ? (

        <main className="l-container-currency__main">
          <section className="c-info-currency">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyLoadedChart currencyRates={currencyRates} baseCurrency={currencyId} />
            </Suspense>
          </section>
        </main>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
}
