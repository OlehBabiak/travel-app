import React from "react";
import classes from './Input.module.css'


const InputComponent=({
                          name, type, value, onChange, label, autoComplete, min, max, onBlur
                      }) => {
    return (
        <label className={classes['input']}>
            <span className={classes['input__heading']}>{label}</span>
            <input
                name={name}
                type={type}
                value={value || ''}
                onChange={onChange}
                autoComplete={autoComplete || ''}
                min={min || ''}
                max={max || ''}
                onBlur={onBlur}
                required
            />
        </label>
    );
}

export default InputComponent