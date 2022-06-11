import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Home/HomePage";
import SignUp from "./components/SingUp/SignUp";
import classes from './index.css'

function App () {
    return (
        <div className={classes['wrapper']}>
            <Header/>
            {/*<HomePage/>*/}
            <SignUp/>
            <Footer/>
        </div>
    );
}

export default App;
