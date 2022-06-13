import InputComponent from "../UI/Input";
import classes from "./SignUp.module.css";
import Button from "../UI/Button";
import { useContext } from "react";
import Context from "../../store/Context";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const {
    makeNavVisible,
    submitHandler,
    enteredUserName,
    userNameChangeHandler,
    validateNameHandler,
    enteredEmail,
    emailChangeHandler,
    validateEmailHandler,
    enteredPassword,
    passwordChangeHandler,
    validatePasswordHandler,
    formIsValid,
  } = useContext(Context);

  makeNavVisible(false);

  return (
    <main className={classes["sign-up-page"]}>
      <form
        onSubmit={submitHandler}
        className={classes["sign-up-form"]}
        autoComplete="off"
      >
        <h2 className={classes["sign-up-form__title"]}>Sign Up</h2>
        <InputComponent
          id="full-name"
          label="Full name"
          name="full-name"
          type="text"
          value={enteredUserName}
          onChange={userNameChangeHandler}
          onBlur={validateNameHandler}
        />
        <InputComponent
          id="email"
          label="Email"
          name="email"
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <InputComponent
          id="password"
          label="Password"
          name="password"
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          autoComplete="new-password"
        />
        <Button
          className={classes["button"]}
          type="submit"
          disabled={!formIsValid}
        >
          Sign Up
        </Button>
      </form>
      <span>
        Already have an account?
        <Link to="/sing-in" className={classes["sign-up-form__link"]}>
          Sign In
        </Link>
      </span>
    </main>
  );
};

export default SignUpPage;
