import logo from '../../assets/logo.svg';
import './Home.css';

/**
 * HomePage.
 */
export function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home Page
        </a>
      </header>
    </div>
  );
}
