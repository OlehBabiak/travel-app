import classes from "./TripFilter.module.css";
import classNames from "classnames";

const TripFilter = ({ durationChoice, levelChoice, searchVal }) => {
  return (
    <section className={classes["trips-filter"]}>
      <form className={classes["trips-filter__form"]} autoComplete="off">
        <label
          className={classNames(
            classes["trips-filter__search"],
            classes["input"]
          )}
        >
          <input
            onChange={searchVal}
            name="search"
            type="search"
            placeholder="search by title"
          />
        </label>
        <label className={classes["select"]}>
          <select name="duration" onChange={durationChoice}>
            <option value="">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="0_x_10">&lt; 10 days</option>
            <option value="10_x_1000">&ge; 10 days</option>
          </select>
        </label>
        <label className={classes["select"]}>
          <select name="level" onChange={levelChoice}>
            <option value="">level</option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="difficult">difficult</option>
          </select>
        </label>
      </form>
    </section>
  );
};

export default TripFilter;
