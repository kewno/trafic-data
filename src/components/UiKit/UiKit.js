import React, {useState} from 'react';
import './ui-kit.sass';
import Select from "./Select/Select";
import Button from "./Button/Button";

const UiKit = ({...attr}) => {

    let optionSelect = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24]

    return(
        <div className='ui-kit'>
            <div className="ui-kit__select">
                <Select options={optionSelect}/>
            </div>
            <div className="ui-kit__buttons">
                <Button
                    href={'/'}
                    disable
                >Войти</Button>
                <Button
                    href={'/'}
                >Войти</Button>
                <Button
                    id={'test'}
                >Войти</Button>
            </div>
        </div>
    )
}

export default UiKit