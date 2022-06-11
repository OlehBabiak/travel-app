import classes from './HomePage.module.css'
import TripFilter from "./Filter/TripFilter";
import TripsList from "./TripsList/TripsList";
import { useContext } from "react";
import Context from "../../store/Context";

const HomePage=() => {

    const {makeNavVisible} = useContext(Context);

    makeNavVisible(true)

    return (
        <main>
            <TripFilter/>
            <TripsList/>
        </main>
    );
}

export default HomePage
