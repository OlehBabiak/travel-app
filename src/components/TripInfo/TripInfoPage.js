import iceland from '../assets/images/iceland.jpg'
import {useParams} from "react-router-dom";
import Button from "../UI/Button";
import classNames from "classnames";
import classes from './TripInfo.module.css'
import {Fragment, useContext } from "react";
import Context from "../../store/Context";

const TripInfoPage=() => {

    const {showModalHandler, makeNavVisible, tripArray} = useContext(Context);
    makeNavVisible(true)

    const {tripId} = useParams()

    const tripInfo = tripArray
        .filter(el => el['id'] === tripId.slice(1))
        .map(el =>
            <main className={classes['trip-page']}>
                <div className={classes['trip']}>
                    <img src={iceland} className={classes['trip__img']} alt="trip image"/>
                    <div className={classes['trip__content']}>
                        <div className={classes['trip-info']}>
                            <h3 className={classes['trip-info__title']}>{el.title}</h3>
                            <div className={classes['trip-info__content']}>
                                <span className={classes['trip-info__duration']}><strong>{el.duration}</strong> days</span>
                                <span className={classes['trip-info__level']}>{el.level}</span>
                            </div>
                        </div>
                        <div className={classes['trip__description']}>
                            {el.description}
                        </div>
                        <div>
                            <span>Price</span>
                            <strong className={classes['trip-price__value']}>{el.price} $</strong>
                        </div>
                        <Button
                            onClick={showModalHandler}
                            className={classNames(classes['trip__button'], 'button')}
                        >Book a trip
                        </Button>
                    </div>
                </div>
            </main>
        )


    return (
        <Fragment>
            {tripInfo}
        </Fragment>
    );
}

export default TripInfoPage