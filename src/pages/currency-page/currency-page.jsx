import React, { lazy, Suspense , useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { currencyFetchById } from '../../redux/actions/currency';
import { getLoading, getCurrency } from '../../redux/selectors/currency';

import './currency.scss';
const LazyLoadedChart = lazy(() => import('../../components/chart'));

export default function CurrencyPage(props) {
  // const {
  //   match: {
  //     params: { currencyId },
  //   },
  // } = props
  console.log(props)
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const currency = useSelector(getCurrency);
  const thirtyDaysAgoISODate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  useEffect(() => {
    dispatch(currencyFetchById({ dateFrom: thirtyDaysAgoISODate, toId: 'EUR' }));
  }, [dispatch]);


  return (
    <div className="l-container-currencies">
      {!isLoading ? (
        <>
          <header className="l-container-currencies__header">
            График валюты
          </header>
          <main className="l-container-currencies__main">
            <section className="c-info-currencies">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyLoadedChart />
              </Suspense>
            </section>
          </main>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
