import reactIcon from "../react-icon.png";

function Header() {
  return (
    <header className="app-header">
      <img src={reactIcon} alt="React logo" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
