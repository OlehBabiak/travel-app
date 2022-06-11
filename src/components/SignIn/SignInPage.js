import classes from './SignIn.module.css'
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useContext } from "react";
import Context from "../../store/Context";
import { Link } from "react-router-dom";


const SignInPage = () => {

    const {makeNavVisible} = useContext(Context);

    makeNavVisible(false)

    return (
        <main className={classes['sign-in-page']}>
            <form className={classes['sign-in-form']} autoComplete="off">
                <h2 className={classes['sign-in-form__title']}>Sign In</h2>
                <Input
                    name="email"
                    type="email"
                    label='Email'
                />
                <Input
                    name="password"
                    type="password"
                    label='Password'
                />
                <Button
                    type="submit"
                    className={classes['button']}
                >
                    Sign In
                </Button>
            </form>
            <span>
        Already have an account?
        <Link to="/sing-up" className={classes['sign-in-form__link']}>Sign Up</Link>
      </span>
        </main>
    );
}

export default SignInPage