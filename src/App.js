import React, {Fragment} from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Home/HomePage";
import SignUp from "./components/SingUp/SignUpPage";
import SignInPage from "./components/SignIn/SignInPage";

function App () {
    return (
        <Fragment>
            <Header/>
            {/*<HomePage/>*/}
            {/*<SignUp/>*/}
            <SignInPage/>
            <Footer/>
        </Fragment>
    );
}

export default App;
