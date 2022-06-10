import heart from '../assets/images/heart.svg'
import classes from './Footer.module.css'

const Footer=() => {
    return (
        <footer className={classes['footer']}>
      <span className={classes["footer__text"]}>
        from <a className={classes["footer__link"]} href="https://binary-studio.com">binary studio</a> with
        <img className={classes['footer__icon']} src={heart} alt="heart icon"/>
      </span>
        </footer>
    );
}

export default Footer