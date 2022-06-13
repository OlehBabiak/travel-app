import classes from "./Modal.module.css";
import classNames from 'classnames'

const ErrorModalOverlay = () => {
    return (
        <div className={classes['modal']}>
            <div className={classNames('error-border', classes['trip-popup-error'])}>
                    <div className={classes['trip-info__error']}>
                        <h3 className={classes['trip-info__title__error']}>Unfortunatly, we don`t have any trips</h3>
                        <div className={classes['trip-info__content']}>
                            <span className={classes['trip-info__level__error']}>You can visit our site later</span>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default ErrorModalOverlay