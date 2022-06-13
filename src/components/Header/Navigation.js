import classes from "./Navigation.module.css";
import briefcase from "../assets/images/briefcase.svg";
import profile from "../assets/images/user.svg";
import classNames from "classnames";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={classes["header__nav"]}>
      <ul className={classes["nav-header__list"]}>
        <li className={classes["nav-header__item"]} title="Bookings">
          <Link to="/bookings" className={classes["nav-header__inner"]}>
            <span className={classes["visually-hidden"]}>Bookings</span>
            <img src={briefcase} alt=" icon" />
          </Link>
        </li>
        <li className={classes["nav-header__item"]} title="Profile">
          <div
            className={`${classes["nav-header__inner"]} ${classes["profile-nav"]}`}
            tabIndex="0"
          >
            <img src={profile} alt="profile icon" />
            <ul className={classes["profile-nav__list"]}>
              <li
                className={classNames(
                  classes["profile-nav__item"],
                  classes["profile-nav__username"]
                )}
              >
                John Doe
              </li>
              <li className={classes["profile-nav__item"]}>
                <Button className={classes["profile-nav__item"]}>
                  Sign Out
                </Button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
