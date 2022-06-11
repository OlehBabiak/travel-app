import classes from './Book.module.css'

const BookInfo = () => {
    return (
        <li className={classes['booking']}>
            <h3 className={classes['booking__title']}>Iceland</h3>
            <span className="booking__guests">2 guests</span>
            <span className="booking__date">13.07.2022</span>
            <span className="booking__total">14000 $</span>
            <button className={classes['booking__cancel']} title="Cancel booking">
                ×
            </button>
        </li>
    );
}

export default BookInfo