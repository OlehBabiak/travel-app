import classes from "./Modal.module.css";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";

const ModalOverlay = ({closeModal}) => {

    const [enteredDate, setEnteredDate] = useState(new Date)
    const [enteredGuestNumber, setEnteredGuestNumber] = useState(1)

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const guestsChangeHandler = (event) => {
        setEnteredGuestNumber(event.target.value)
    }

    let today = new Date()

    return (
        <div className={classes['modal']}>
            <div className={classes['trip-popup']}>
                <button onClick={closeModal} className={classes['trip-popup__close']}>×</button>
                <form className={classes['trip-popup__form']} autoComplete="off">
                    <div className={classes['trip-info']}>
                        <h3 className={classes['trip-info__title']}>Iceland</h3>
                        <div className={classes['trip-info__content']}>
                            <span className={classes['trip-info__duration']}><strong>15</strong> days</span>
                            <span className={classes['trip-info__level']}>easy</span>
                        </div>
                    </div>
                    <Input
                        label='Date'
                        name='date'
                        type='date'
                        min ={today.toISOString().slice(0, 10)}
                        max ={'2025-05-11'}
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                    <Input
                        label='Number of guests'
                        name="guests"
                        type="number"
                        onChange={guestsChangeHandler}
                        min="1"
                        max="10"
                        value={enteredGuestNumber}
                    />
                    <span className={classes['trip-popup__total']}>
              Total: <output className={classes['trip-popup__total-value']}>4000$</output>
            </span>
                    <Button type="submit" className="button">Book a trip</Button>
                </form>
            </div>
        </div>
    );
}

export default ModalOverlay