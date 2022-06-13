import BookInfo from "../UI/BookInfo";
import classes from './Booking.module.css'
import React, { useContext, useState } from "react";
import Context from "../../store/Context";

const BOOKS_LIST = [
    {
        "id": "73b7df68-62f6-4a5f-9c87-f971637ac7a0",
        "userId": "1dd97a12-848f-4a1d-8a7d-34a2132fca94",
        "tripId": "b192252e-2bb6-4cf3-b9cb-34a8a2f94891",
        "guests": 2,
        "date": "2022-06-23T14:37:00.049Z",
        "trip": {
            "title": "Greenland",
            "duration": 19,
            "price": 5395
        },
        "totalPrice": 10790,
        "createdAt": "2022-05-22T17:42:49.537Z"
    },
    {
        "id": "50f6bc2e-808d-48ed-970e-4acde5d7e723",
        "userId": "1dd97a12-848f-4a1d-8a7d-34a2132fca94",
        "tripId": "6417f33c-31e0-444a-abac-cd0c1f8e48d0",
        "guests": 2,
        "date": "2022-11-22T14:37:00.049Z",
        "trip": {
            "title": "Spitsbergen",
            "duration": 11,
            "price": 3495
        },
        "totalPrice": 6990,
        "createdAt": "2022-05-22T17:45:41.982Z"
    },
    {
        "id": "37474dad-8407-473d-a0a1-cdb695120fad",
        "userId": "1dd97a12-848f-4a1d-8a7d-34a2132fca94",
        "tripId": "e5c23843-455a-46c2-bedb-af269089fba7",
        "guests": 1,
        "date": "2022-07-30T14:37:00.049Z",
        "trip": {
            "title": "Ireland",
            "duration": 8,
            "price": 1995
        },
        "totalPrice": 1995,
        "createdAt": "2022-05-22T17:44:02.700Z"
    },
    {
        "id": "ee3be8e7-648f-4fce-bdb5-ba0c7cb38c55",
        "userId": "1dd97a12-848f-4a1d-8a7d-34a2132fca94",
        "tripId": "4c7564ad-fafc-4641-a692-55a683de7fbe",
        "guests": 1,
        "date": "2022-09-03T14:37:00.049Z",
        "trip": {
            "title": "Scotland",
            "duration": 8,
            "price": 2145
        },
        "totalPrice": 2145,
        "createdAt": "2022-05-22T17:44:56.660Z"
    }
]

const BookingPage=() => {

    const [availableBooks, setAvailableBooks] = useState(BOOKS_LIST);

    const removeBook = (id) => {
        setAvailableBooks(availableBooks.filter(item => item['id'] !== id))
    }

    const onTodoDelete = (arg) => {
        const answer = window.confirm('Are you sure?')
        if (answer) {
            removeBook(arg)
        }
    }

    const {makeNavVisible} = useContext(Context);
    const bookList = availableBooks.sort((a, b)=> {
        return new Date(a['date']) - new Date(b['date'])
    }).map(book =>
        <BookInfo
            id = {book['id']}
            key = {book['id']}
            title = {book['trip']['title']}
            guests = {book['guests']}
            date = {new Date(book['date']).toLocaleString().slice(0,10)}
            totalPrice = {book['totalPrice']}
            onclick = {() => onTodoDelete(book['id'])}
        />
    )

        makeNavVisible(true)

    return (
   <main className={classes['bookings-page']}>
                <ul className={classes['bookings__list']}>
                    {bookList}
                </ul>
            </main>
    );
}

export default BookingPage