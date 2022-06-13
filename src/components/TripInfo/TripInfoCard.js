import classes from "./TripInfo.module.css";
import iceland from "../assets/images/iceland.jpg";
import Button from "../UI/Button";
import classNames from "classnames";
import Modal from "../UI/Modal/Modal";
import React, { useContext } from "react";
import Context from "../../store/Context";

const TripInfoCard = ({
  title,
  duration,
  level,
  description,
  price,
  showModalHandler,
}) => {

  const { closeModalHandler, modalIsShown } =
      useContext(Context);

  return (
      <>
        {modalIsShown && <Modal
            onCloseModal={closeModalHandler}
            price={price}
        />}
        <main className={classes["trip-page"]}>
          <div className={classes["trip"]}>
            <img src={iceland} className={classes["trip__img"]} alt="trip" />
            <div className={classes["trip__content"]}>
              <div className={classes["trip-info"]}>
                <h3 className={classes["trip-info__title"]}>{title}</h3>
                <div className={classes["trip-info__content"]}>
              <span className={classes["trip-info__duration"]}>
                <strong>{duration}</strong> days
              </span>
                  <span className={classes["trip-info__level"]}>{level}</span>
                </div>
              </div>
              <div className={classes["trip__description"]}>{description}</div>
              <div>
                <span>Price</span>
                <strong className={classes["trip-price__value"]}>{price} $</strong>
              </div>
              <Button
                  onClick={showModalHandler}
                  className={classNames(classes["trip__button"], "button")}
              >
                Book a trip
              </Button>
            </div>
          </div>
        </main>
      </>
  );
};

export default TripInfoCard;
