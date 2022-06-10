import classes from './TripCard.module.css'

const TripCard = ({children}) => {
    return (
       <div className={classes['trip-card']}>
           {children}
       </div>
    );
}

export default TripCard