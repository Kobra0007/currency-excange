import { useState } from 'react';

export default function Conversion({
  currencies,
  getConversion,
  conversionInfo,
  toCurrencyId,
  isLoadingConversion,
}) {
  const [selectedCurrency, setSelectedCurrency] = useState('');

  let data = Object.entries(currencies);

  if (!data.length) {
    return null;
  }

  const [price, setPrice] = useState(1000);

  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setPrice(newValue);
    getConversion(newValue, selectedCurrency);
  };

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value.replace(/[^0-9.]/g, ''));
    if (newValue) {
      setPrice(newValue);
      getConversion(newValue, selectedCurrency);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedCurrency(event.target.value);
    price && getConversion(price, event.target.value);
  };

  return (
    <>
      <label htmlFor="conversion">Валюта</label>

      <select
        id="conversion"
        value={selectedCurrency}
        onChange={handleSelectChange}
      >
        <option value="">Выберите валюту...</option>
        {data.map((item) => (
          <option value={item[0]}>
            {item[0]} ({item[1]})
          </option>
        ))}
      </select>

      {selectedCurrency ? (
        <>
          <div>
            <label htmlFor="rangeInput">Сколько хотите продать: </label>
            <input
              type="range"
              id="rangeInput"
              min="1000"
              max="1000000"
              step="1000"
              value={price}
              onChange={handleRangeChange}
            />
            <input
              type="text"
              id="customInput"
              pattern="[0-9]*"
              value={price}
              onChange={handleInputChange}
            />
          </div>
        </>
      ) : null}

      {conversionInfo.rates && (
        <div className="c-conversion-data">
          <div>Наше предложение</div>
          <div>
            <div>Сумма продажи в отделении:</div>
            <div>
              {price} {selectedCurrency}
            </div>
          </div>
          <div>
            <div>Сумма валюты:</div>
            <div>
              {!isLoadingConversion
                ? conversionInfo.rates[toCurrencyId]
                : '...'}{' '}
              {toCurrencyId}
            </div>
          </div>
          <div>
            <div>Курс продажи</div>
            <div>
              {!isLoadingConversion
                ? conversionInfo.rates[toCurrencyId] / price
                : '...'}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
