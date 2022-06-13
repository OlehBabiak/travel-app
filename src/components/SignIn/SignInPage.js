import classes from "./SignIn.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useContext } from "react";
import Context from "../../store/Context";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const {
    makeNavVisible,
    enteredEmail,
    emailChangeHandler,
    validateEmailHandler,
    enteredPassword,
    passwordChangeHandler,
    validatePasswordHandler,
    formIsValid,
  } = useContext(Context);

  console.log("test");

  makeNavVisible(false);

  return (
    <main className={classes["sign-in-page"]}>
      <form className={classes["sign-in-form"]} autoComplete="off">
        <h2 className={classes["sign-in-form__title"]}>Sign In</h2>
        <Input
          id="email"
          label="Email"
          name="email"
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
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
          type="submit"
          className={classes["button"]}
          disabled={!formIsValid}
        >
          Sign In
        </Button>
      </form>
      <span>
        Already have an account?
        <Link to="/sing-up" className={classes["sign-in-form__link"]}>
          Sign Up
        </Link>
      </span>
    </main>
  );
};

export default SignInPage;
