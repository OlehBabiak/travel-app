import classes from './HomePage.module.css'
import TripFilter from "./Filter/TripFilter";
import TripsList from "./TripsList/TripsList";

const HomePage=() => {
    return (
        <main>
            <TripFilter/>
            <TripsList/>
        </main>
    );
}

export default HomePage
