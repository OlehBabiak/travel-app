import classes from "./TripsList.module.css";
import TripCard from "../../UI/TripCard";
import ErrorModalOverlay from "../../UI/Modal/ErrorModalOverlay";

const TripsList = ({ tripArray }) => {
  const tripList = tripArray.map((trip) => (
    <TripCard
      key={trip["id"]}
      id={trip["id"]}
      img={trip["image"]}
      title={trip["title"]}
      duration={trip["duration"]}
      level={trip["level"]}
      price={trip["price"]}
    />
  ));

  return (
    <section className={classes["trips"]}>
      {tripArray.length > 0 ? (
        <ul className={classes["trip-list"]}>{tripList}</ul>
      ) : (
        <ErrorModalOverlay />
      )}
    </section>
  );
};

export default TripsList;
