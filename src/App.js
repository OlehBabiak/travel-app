import React, {Fragment, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Home/HomePage";
import SignUp from "./components/SingUp/SignUpPage";
import SignInPage from "./components/SignIn/SignInPage";
import TripInfoPage from "./components/TripInfo/TripInfoPage";
import BookInfo from "./components/UI/BookInfo";
import BookingPage from "./components/Bookings/BookingPage";
import Modal from "./components/UI/Modal/Modal";

function App () {
    const [modalIsShown, setModalIsShown] = useState(false);

    const showModalHandler = () => {
        setModalIsShown(true)
    }

    const closeModalHandler = () => {
        setModalIsShown(false)
    }

    
    return (
        <Fragment>
            {modalIsShown && <Modal onCloseModal={closeModalHandler}/>}
            <Header/>
            {/*<HomePage/>*/}
            {/*<SignUp/>*/}
            {/*<SignInPage/>*/}
            <TripInfoPage onShowModal={showModalHandler}/>
            {/*<BookingPage/>*/}
            <Footer/>
        </Fragment>
    );
}

export default App;
