import './Header.css';

function Header({ storeName = 'GadgetGrove' }) {
  return (
    <header className="app-header">
      <div className="header-inner">
        <h1 className="logo">🛒 {storeName}</h1>
        <nav className="nav-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <button className="cart-btn" type="button">
          🛒 Cart (0)
        </button>
      </div>
    </header>
  );
}

export default Header;