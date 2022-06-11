import React from "react";
import classes from './Input.module.css'


const InputComponent=({
                          name, type, id, value, onChange, onblur, label, autoComplete
                      }) => {
    return (
            <label className={classes['input']}>
                <span className={classes['input__heading']}>{label}</span>
                <input
                    name={name}
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    onBlur={onblur}
                    autoComplete={autoComplete || ''}
                    required
                />
            </label>
    );
}

export default InputComponent