import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { currenciesFetch } from '../../redux/actions/main';
import { getLoading, getCurrenciesList } from '../../redux/selectors/main';

import './main.scss';

export default function Main() {
  const isLoading = useSelector(getLoading);
  const currencies = useSelector(getCurrenciesList);
  console.log(currencies)
  const dispatch = useDispatch();


  const listOfCurrencies = () => {
    if (!currencies) {
      return null
    }

    let data = Object.entries(currencies);

    if (!data.length) {
      return null;
    }
    return (
      <ul>
        {data.map(item => <li key={item[0]}>
          <a href={item[0]} class='c-currency-link'>{item[1]}</a>
        </li>)}
      </ul>
    )
  }
  useEffect(() => {
    // dispatch(currenciesFetch());
  }, [dispatch]);


  return (
    <div className="l-container-currencies">
      {!isLoading ? (
        <>
          <header className="l-container-currencies__header">
            Список валют
          </header>
          <main className="l-container-currencies__main">
            <section className="c-info-currencies">
              {listOfCurrencies()}
            </section>
          </main>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
