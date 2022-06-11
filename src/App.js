import React, {Fragment} from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Home/HomePage";
import SignUp from "./components/SingUp/SignUpPage";
import SignInPage from "./components/SignIn/SignInPage";
import TripInfoPage from "./components/TripInfo/TripInfoPage";

function App () {
    return (
        <Fragment>
            <Header/>
            {/*<HomePage/>*/}
            {/*<SignUp/>*/}
            {/*<SignInPage/>*/}
            <TripInfoPage/>
            <Footer/>
        </Fragment>
    );
}

export default App;
