import classes from './TripCard.module.css'

const TripCard =({img, title, duration, level, price})=> {
    return (
       <div className={classes['trip-card']}>
           <img src={img} alt="trip image"/>
           <div className={classes['trip-card__content']}>
               <div className={classes['trip-info']}>
                   <h3 className={classes['trip-info__title']}>{title}</h3>
                   <div className={classes['trip-info__content']}>
                       <span className={classes['trip-info__duration']}><strong>{duration}</strong> days</span>
                       <span className={classes['trip-info__level']}>{level}</span>
                   </div>
               </div>
               <div>
                   <span>Price</span>
                   <strong className={classes['trip-price__value']}>{price} $</strong>
               </div>
           </div>
           <a href="/" className='button'>Discover a trip</a>
       </div>
    );
}

export default TripCard