import Navigation from "./Navigation";
import classes from './Header.module.css'


const Header = () => {
    return (
       <header className={classes['header']}>
           <div className={classes['header__inner']}>
               <a href='/' className={classes['header__logo']}>Travel App</a>
               <Navigation/>
           </div>
       </header>
    );
}

export default Header