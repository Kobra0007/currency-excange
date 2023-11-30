export default function Navbar({ toggleTheme, theme }) {

  const buttonStyle = {
    margin: '12px 15px',
    padding: '10px 15px',
    backgroundColor: theme === "dark" ? '#e74c3c' : '#3498db',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <>
      <header>
        <button onClick={toggleTheme} style={buttonStyle}>{theme === "dark" ? 'Темная': 'Светлая'} тема</button>
      </header>
    </>
  );
}
