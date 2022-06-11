import iceland from '../assets/images/iceland.jpg'
import Button from "../UI/Button";
import classNames from "classnames";
import classes from './TripInfo.module.css'


const TripInfoPage=({onShowModal}) => {
    return (
        <main className={classes['trip-page']}>
            <div className={classes['trip']}>
                <img src={iceland} className={classes['trip__img']} alt="trip image"/>
                <div className={classes['trip__content']}>
                    <div className={classes['trip-info']}>
                        <h3 className={classes['trip-info__title']}>Iceland</h3>
                        <div className={classes['trip-info__content']}>
                            <span className={classes['trip-info__duration']}><strong>15</strong> days</span>
                            <span className={classes['trip-info__level']}>easy</span>
                        </div>
                    </div>
                    <div className={classes['trip__description']}>
                        An island is a body of land surrounded by water. Continents are also surrounded by
                        water, but because they are so big, they are not considered islands. Australia, the
                        smallest continent, is more than three times the size of Greenland, the largest island.
                        There are countless islands in the ocean, lakes, and rivers around the world. They vary
                        greatly in size, climate, and the kinds of organisms that inhabit them.
                    </div>
                    <div>
                        <span>Price</span>
                        <strong className={classes['trip-price__value']}>7000 $</strong>
                    </div>
                    <Button
                        onClick={onShowModal}
                        className={classNames(classes['trip__button'], 'button')}
                    >Book a trip
                    </Button>
                </div>
            </div>
        </main>
    );
}

export default TripInfoPage