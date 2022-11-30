import React from 'react';
import { MultiSelect } from 'primereact/multiselect';

const SelectChecked = ({id, dateFor, options, value, onChange, ...attr}) => {
    return(
        <MultiSelect
            data-tip
            data-for={dateFor}
            id={id}
            value={value}
            onChange={onChange}
            options={options}
            optionLabel="name"
            placeholder="Выберите направление"
            maxSelectedLabels={1}
        />
    )
}

export default SelectChecked