import classes from './TripsList.module.css'
import icelandImg from '../../assets/images/iceland.jpg'
import TripCard from "../../UI/TripCard";

const TripsList = () => {
    return (
        <section className={classes['trips']}>
            <ul className={classes['trip-list']}>
                <TripCard>
                    <img src={icelandImg} alt="trip image"/>
                    <div className={classes['trip-card__content']}>
                        <div className={classes['trip-info']}>
                            <h3 className={classes['trip-info__title']}>Island</h3>
                            <div className={classes['trip-info__content']}>
                                <span className={classes['trip-info__duration']}><strong>15</strong> days</span>
                                <span className={classes['trip-info__level']}>easy</span>
                            </div>
                        </div>
                        <div className="trip-price">
                            <span>Price</span>
                            <strong className={classes['trip-price__value']}>7000 $</strong>
                        </div>
                    </div>
                    <a href="/" className={classes['button']}>Discover a trip</a>
                </TripCard>
                <TripCard>
                    <img src={icelandImg} alt="trip image"/>
                    <div className={classes['trip-card__content']}>
                        <div className={classes['trip-info']}>
                            <h3 className={classes['trip-info__title']}>Island</h3>
                            <div className={classes['trip-info__content']}>
                                <span className={classes['trip-info__duration']}><strong>15</strong> days</span>
                                <span className={classes['trip-info__level']}>easy</span>
                            </div>
                        </div>
                        <div className="trip-price">
                            <span>Price</span>
                            <strong className={classes['trip-price__value']}>7000 $</strong>
                        </div>
                    </div>
                    <a href="/" className={classes['button']}>Discover a trip</a>
                </TripCard>
                <TripCard>
                    <img src={icelandImg} alt="trip image"/>
                    <div className={classes['trip-card__content']}>
                        <div className={classes['trip-info']}>
                            <h3 className={classes['trip-info__title']}>Island</h3>
                            <div className={classes['trip-info__content']}>
                                <span className={classes['trip-info__duration']}><strong>15</strong> days</span>
                                <span className={classes['trip-info__level']}>easy</span>
                            </div>
                        </div>
                        <div className="trip-price">
                            <span>Price</span>
                            <strong className={classes['trip-price__value']}>7000 $</strong>
                        </div>
                    </div>
                    <a href="/" className={classes['button']}>Discover a trip</a>
                </TripCard>
                <TripCard>
                    <img src={icelandImg} alt="trip image"/>
                    <div className={classes['trip-card__content']}>
                        <div className={classes['trip-info']}>
                            <h3 className={classes['trip-info__title']}>Island</h3>
                            <div className={classes['trip-info__content']}>
                                <span className={classes['trip-info__duration']}><strong>15</strong> days</span>
                                <span className={classes['trip-info__level']}>easy</span>
                            </div>
                        </div>
                        <div className="trip-price">
                            <span>Price</span>
                            <strong className={classes['trip-price__value']}>7000 $</strong>
                        </div>
                    </div>
                    <a href="/" className={classes['button']}>Discover a trip</a>
                </TripCard>

            </ul>
        </section>
    );
}

export default TripsList