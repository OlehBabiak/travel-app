import Context from "./Context";
import { useState } from "react";

const ContextProvider = ({children}) => {

    const [modalIsShown, setModalIsShown] = useState(false);
    const [navigationIsVisible, setNavigationIsVisible] = useState(true)


    const showModalHandler = () => {
        setModalIsShown(true)
    }

    const closeModalHandler = () => {
        setModalIsShown(false)
    }

    const makeNavVisible = (bool) => {
        setNavigationIsVisible(bool)
    }

    return (
       <Context.Provider value={{
           closeModalHandler,
           modalIsShown,
           showModalHandler,
           navigationIsVisible,
           setNavigationIsVisible,
           makeNavVisible
       }}>
           {children}
       </Context.Provider>
    );
}

export default ContextProvider