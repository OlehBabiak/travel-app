import TripFilter from "./Filter/TripFilter";
import TripsList from "./TripsList/TripsList";
import { useContext, useState } from "react";
import Context from "../../store/Context";

const HomePage = () => {
  const [selectedByDuration, setSelectedByDuration] = useState("");
  const [selectedByLevel, setSelectedByLevel] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { makeNavVisible, showErrorModalHandler, tripArray } =
    useContext(Context);

  tripArray.length <= 0 && showErrorModalHandler();

  const choiceDurationHandler = (e) => {
    setSelectedByDuration(e.target.value);
  };

  const choiceLevelHandler = (e) => {
    setSelectedByLevel(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  makeNavVisible(true);

  const from =
    selectedByDuration.length === 0 ? 0 : +selectedByDuration.split("_x_")[0];
  const to =
    selectedByDuration.length === 0
      ? 1000
      : +selectedByDuration.split("_x_")[1];

  const sortedArray = tripArray
    .filter((trip) => {
      return trip["title"]
        .toLowerCase()
        .includes(searchValue.toLowerCase().trim());
    })
    .filter((trip) => {
      return trip["duration"] >= from && trip["duration"] < to;
    })
    .filter((trip) => {
      return selectedByLevel === "" ? trip : trip["level"] === selectedByLevel;
    });

  return (
    <main>
      <TripFilter
        durationChoice={choiceDurationHandler}
        levelChoice={choiceLevelHandler}
        searchVal={searchHandler}
      />
      <TripsList tripArray={sortedArray} />
    </main>
  );
};

export default HomePage;
