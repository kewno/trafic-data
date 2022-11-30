import React from 'react';
import './options.sass';
import OptionsForm from "./OptionsForm/OptionsForm";

const Options = ({ ...attr}) => {
    return(
        <div className='options'>
            <OptionsForm/>
        </div>
    )
}

export default Options