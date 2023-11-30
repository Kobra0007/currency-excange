import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NAV } from './utils/urls';
import { themes, getGlobalStyles } from './theme';
import { Global, ThemeProvider } from '@emotion/react';

import CurrencyPage from './pages/currency-page/currency-page';
import Main from './pages/main/main';
import Navbar from './components/navbar';

function NotFound() {
  return <div>Not found</div>;
}

export default function PageWrapper() {

  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }
  const baseTheme = themes[theme]
  const globalStyles = getGlobalStyles({
    baseTheme,
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={baseTheme}>
        <Navbar toggleTheme={toggleTheme} />

        <Routes>
          <Route path={NAV.currency(':currencyId')} element={<CurrencyPage />} />
          
          <Route path={NAV.empty()} element={<Main />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
