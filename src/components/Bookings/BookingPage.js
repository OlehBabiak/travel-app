import BookInfo from "../UI/BookInfo";
import classes from './Booking.module.css'
import React, { useContext } from "react";
import Context from "../../store/Context";

const BookingPage=() => {

    const {makeNavVisible} = useContext(Context);

    makeNavVisible(true)

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