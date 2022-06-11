import classes from "./Modal.module.css";
import Input from "../Input";
import Button from "../Button";

const ModalOverlay = ({closeModal}) => {
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
                    />
                    <Input
                        label='Number of guests'
                        name="guests"
                        type="number"
                        min="1"
                        max="10"
                        value="1"
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