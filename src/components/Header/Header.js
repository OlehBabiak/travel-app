import Navigation from "./Navigation";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = ({ isVisible }) => {
  return (
    <header className={classes["header"]}>
      <div className={classes["header__inner"]}>
        <Link to="/" className={classes["header__logo"]}>
          Travel App
        </Link>
        {isVisible && <Navigation />}
      </div>
    </header>
  );
};

export default Header;
