import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function Header({ toggleNavigate, toggleSearchText, setIsWishlist }) {
  return (
    <header className="header-container">
      <div className="header-component">
        {/* logo */}
        <Image
          className="header-logo"
          src="/image/sushivid_logo.png"
          alt="sushivid_logo"
          width="126"
          height="48"
        />
        {/* searchbar */}
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            spellCheck="false"
            onChange={(e) => toggleSearchText(e.target.value)}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        {/* wishlist */}
        <div className="login-container">
          <button className="icon-btn" onClick={() => setIsWishlist(true)}>
            <FontAwesomeIcon
              icon={faHeart}
              size="2xl"
              style={{ color: "#545f71" }}
            />
          </button>
          {/* cart */}
          <button className="icon-btn">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="2xl"
              style={{ color: "#545f71" }}
            />
          </button>
          {/* login button */}
          <button className="login-btn">
            <strong>Login</strong>
          </button>
        </div>
        {/* mobile ONLY hamburger menu */}
        <div className="mobile-container" onClick={toggleNavigate}>
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            style={{ color: "#545f71" }}
          />
        </div>
      </div>
    </header>
  );
}