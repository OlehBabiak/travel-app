import classes from './TripCard.module.css'
import icelandImg from "../assets/images/iceland.jpg";

const TripCard =()=> {
    return (
       <div className={classes['trip-card']}>
           <img src={icelandImg} alt="trip image"/>
           <div className={classes['trip-card__content']}>
               <div className={classes['trip-info']}>
                   <h3 className={classes['trip-info__title']}>Island</h3>
                   <div className={classes['trip-info__content']}>
                       <span className={classes['trip-info__duration']}><strong>15</strong> days</span>
                       <span className={classes['trip-info__level']}>easy</span>
                   </div>
               </div>
               <div>
                   <span>Price</span>
                   <strong className={classes['trip-price__value']}>7000 $</strong>
               </div>
           </div>
           <a href="/" className='button'>Discover a trip</a>
       </div>
    );
}

export default TripCard