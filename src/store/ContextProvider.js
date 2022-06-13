import Context from "./Context";
import { useState } from "react";

const ContextProvider = ({children}) => {

    const [modalIsShown, setModalIsShown] = useState(false);
    const [errorModalIsShown, setErrorModalIsShown] = useState(false);
    const [navigationIsVisible, setNavigationIsVisible] = useState(true)

    const [formIsValid, setFormIsValid] = useState(false);
    const [nameIsValid, setNameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passIsValid, setPassIsValid] = useState(false);
    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')

    const emailChangeHandler=(event) => {
        setEnteredEmail(event.target.value)
        setFormIsValid(enteredPassword.trim().length >=3 && enteredPassword.trim().length <=20 && event.target.value.includes('@'))
    };

    const passwordChangeHandler=(event) => {
        setEnteredPassword(event.target.value)
        setFormIsValid(event.target.value.trim().length >=3 && event.target.value.trim().length <=20 && enteredEmail.includes('@'))
    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const validateNameHandler = ()=> {
        setNameIsValid(enteredUserName.trim().length > 3)
    }

    const validateEmailHandler=() => {
        setEmailIsValid(enteredEmail.includes('@'))
    };

    const validatePasswordHandler=() => {
        setPassIsValid(enteredPassword.trim().length >= 3 && enteredPassword.trim().length <= 20)
    };


    const submitHandler=(event) => {
        event.preventDefault();
        if(nameIsValid || emailIsValid || passIsValid) {
            return;
        }
        setEnteredUserName('')
        setEnteredPassword('')
        setEnteredEmail('')
    };

    const showModalHandler = () => {
        setModalIsShown(true)
    }

    const showErrorModalHandler = () => {
        setErrorModalIsShown(true)
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
           makeNavVisible,
           showErrorModalHandler,
           errorModalIsShown,
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
           formIsValid
       }}>
           {children}
       </Context.Provider>
    );
}

export default ContextProvider