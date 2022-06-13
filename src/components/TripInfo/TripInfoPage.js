import { useParams } from "react-router-dom";
import { Fragment, useContext } from "react";
import Context from "../../store/Context";
import TripInfoCard from "./TripInfoCard";

const TripInfoPage=() => {

    const {showModalHandler, makeNavVisible, tripArray}=useContext(Context);
    makeNavVisible(true)

    const {tripId}=useParams()

    const tripInfo=tripArray
        .filter(el => el['id']===tripId.slice(1))
        .map(el =>
            <TripInfoCard
                key={el.id}
                id={el.id}
                duration={el.duration}
                level={el.level}
                description={el.description}
                price={el.price}
                showModalHandler={showModalHandler}
            />
        )

    return (
        <Fragment>
            {tripInfo}
        </Fragment>
    );
}

export default TripInfoPage