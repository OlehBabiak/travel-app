import BookInfo from "../UI/BookInfo";
import classes from './Booking.module.css'

const BookingPage=() => {
    return (
        <main className={classes['bookings-page']}>
            <ul className={classes['bookings__list']}>
                <BookInfo/>
                <BookInfo/>
                <BookInfo/>
            </ul>
        </main>
    );
}

export default BookingPage