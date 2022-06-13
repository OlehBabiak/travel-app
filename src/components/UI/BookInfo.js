import classes from './Book.module.css'

const BookInfo = ({title, guests, date, totalPrice}) => {


    return (
        <li className={classes['booking']}>
            <h3 className={classes['booking__title']}>{title}</h3>
            <span className="booking__guests">{guests} guests</span>
            <span className="booking__date">{date}</span>
            <span className="booking__total">{totalPrice} $</span>
            <button className={classes['booking__cancel']} title="Cancel booking">
                ×
            </button>
        </li>
    );
}

export default BookInfo