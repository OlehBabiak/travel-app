import classes from './TripsList.module.css'
import TripCard from "../../UI/TripCard";

const TripsList=({tripArray}) => {

    const tripList=tripArray.map(trip =>
        <TripCard
            key={trip['id']}
            img={trip['image']}
            title={trip['title']}
            duration={trip['duration']}
            level={trip['level']}
            price={trip['price']}
        />
    )

    return (
        <section className={classes['trips']}>
            <ul className={classes['trip-list']}>
                {tripList}
            </ul>
        </section>
    );
}

export default TripsList