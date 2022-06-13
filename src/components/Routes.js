import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage";
import SignUpPage from "./SingUp/SignUpPage";
import SignInPage from "./SignIn/SignInPage";
import TripInfoPage from "./TripInfo/TripInfoPage";
import BookingPage from "./Bookings/BookingPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/sign-up">
        <SignUpPage />
      </Route>
      <Route path="/sign-in">
        <SignInPage />
      </Route>
      <Route path="/trip/:tripId">
        <TripInfoPage />
      </Route>
      <Route path="/bookings">
        <BookingPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
