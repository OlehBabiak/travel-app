import React, { Fragment, useContext } from "react";
import Footer from "./components/Footer/Footer";
import Modal from "./components/UI/Modal/Modal";
import Routes from "./components/Routes";
import Context from "./store/Context";
import Header from "./components/Header/Header";

function App () {
    const {closeModalHandler, modalIsShown, navigationIsVisible} = useContext(Context);
    console.log(navigationIsVisible)
    return (
        <Fragment>
            {modalIsShown && <Modal onCloseModal={closeModalHandler}/>}
            <Header isVisible={navigationIsVisible}/>
                <Routes/>
            <Footer/>
        </Fragment>
    );
}

export default App;
