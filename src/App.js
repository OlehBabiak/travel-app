import React, { Fragment, useContext } from "react";
import Footer from "./components/Footer/Footer";
import Routes from "./components/Routes";
import Context from "./store/Context";
import Header from "./components/Header/Header";

function App() {
  const { navigationIsVisible } =
    useContext(Context);

  return (
    <Fragment>
      <Header isVisible={navigationIsVisible} />
      <Routes />
      <Footer />
    </Fragment>
  );
}

export default App;
