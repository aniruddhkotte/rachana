import '../CSS/Header.css';

function Header() {
  return (
    <div className="header flex row">
      <div className="header-left flex row">
        <img className="logo" src={require("../Assets/r-logo.png").default} alt="" />
        <p className="logo-text">Rachana</p>
      </div>
      <div className="header-right flex row">
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}

export default Header;