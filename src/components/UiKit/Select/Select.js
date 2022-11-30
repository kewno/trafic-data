import React from 'react';
import './select.sass';


const Selects = ({id, dateFor, checked, options, multi, value, onChange, ...attr}) => {
    return(
        <select
            id={id}
            value={value}
            data-tip
            data-for={dateFor}
            className='select'
            onChange={onChange}
        >
            {options.map(el => {
                return <option key={el} value={el}>{el}</option>
            })}

        </select>
    )
}
export default Selects