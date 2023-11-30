import { useState } from 'react';


export default function Navbar({ toggleTheme }) {

  return (
    <>
      <header>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
    </>
  );
}
