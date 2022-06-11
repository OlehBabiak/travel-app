import classes from './TripsList.module.css'

import TripCard from "../../UI/TripCard";

const TripsList = () => {
    return (
        <section className={classes['trips']}>
            <ul className={classes['trip-list']}>
                <TripCard/>
                <TripCard/>
                <TripCard/>
                <TripCard/>
            </ul>
        </section>
    );
}

export default TripsList