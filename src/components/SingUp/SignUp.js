import InputComponent from "../UI/Input";
import classes from './SignUp.module.css'
import Button from "../UI/Button";

const SignUpPage=() => {

    // const [formState, dispatchForm]=useReducer(formReducer, {
    //     emailValue: '',
    //     isEmailValid: null,
    //     passValue: '',
    //     isPassValid: null
    // });

    // const {isEmailValid: emailIsValid, isPassValid: passIsValid}=formState

    const emailChangeHandler=(event) => {
        // dispatchForm({type: 'USER_INPUT', val: event.target.value})
    };

    const passwordChangeHandler=(event) => {
        // dispatchForm({type: 'PASS_INPUT', val: event.target.value})
    };

    const validateEmailHandler=() => {
        // dispatchForm({type: 'INPUT_BLUR'})
    };

    const validatePasswordHandler=() => {
        // dispatchForm({type: 'INPUT_PASS_BLUR'})
    };

    const submitHandler=(event) => {
        // event.preventDefault();
        // ctx.loginHandler(formState.emailValue, formState.passValue);
    };

    return (
        <main className={classes["sign-up-page"]}>
            <form className={classes["sign-up-form"]} autoComplete="off">
                <h2 className={classes["sign-up-form__title"]}>Sign Up</h2>
                <InputComponent
                    id='full-name'
                    label='Full name'
                    name='full-name'
                    type='text'
                    // value={formState.emailValue}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <InputComponent
                    id='email'
                    label='Email'
                    name='email'
                    type='email'
                    // value={formState.emailValue}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <InputComponent
                    id='password'
                    label='Password'
                    name='password'
                    type='password'
                    // value={formState.emailValue}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                    autoComplete="new-password"
                />
                <Button
                    className={classes['button']}
                    type="submit"
                >Sign Up
                </Button>
                {/*<button className="button" type="submit">Sign Up</button>*/}
            </form>
            <span>
        Already have an account?
        <a href="/" className={classes["sign-up-form__link"]}>Sign In</a>
      </span>
        </main>
    );
}

export default SignUpPage