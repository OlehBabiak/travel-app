import classes from './SignIn.module.css'
import Input from "../UI/Input";
import Button from "../UI/Button";


const SignInPage = () => {
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
        <a href="/" className={classes['sign-in-form__link']}>Sign Up</a>
      </span>
        </main>
    );
}

export default SignInPage