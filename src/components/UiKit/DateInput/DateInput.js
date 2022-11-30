import React from 'react';
import InputMask from "react-input-mask";

const DateInput = ({ id, value, onChange, ...attr}) => {
    let mask = 'dD.mM 12:34'
    let formatChars = {
        'm': '[0-1]',
        'M': '[0-9]',
        'd': '[0-3]',
        'D': '[1-9]',
        '1': '[0-2]',
        '2': '[0-9]',
        '3': '[0-5]',
        '4': '[0-9]'
    };

    let beforeMaskedValueChange = (newState, oldState, userInput) => {
        let { value } = newState
        if (value !== '') {
            let dateTimeParts = value.split(' ')

            let timePart = dateTimeParts[1]
            let datePart = dateTimeParts[0].split('.')

            let dayPart = datePart[0]
            let monthPart = datePart[1]


            if(dayPart.startsWith('3'))
                formatChars['D'] = '[0-1]';
            else if(dayPart.startsWith('0'))
                formatChars['D'] = '[1-9]';
            else
                formatChars['D'] = '[0-9]';

            if(monthPart.startsWith('1'))
                formatChars['M'] = '[0-2]';
            else if(monthPart.startsWith('0'))
                formatChars['M'] = '[1-9]';
            else
                formatChars['M'] = '[0-9]';


            if(timePart.startsWith('2'))
                formatChars['2'] = '[0-3]';
            else
                formatChars['2'] = '[0-9]';
        }
        return {value, selection: newState.selection};
    }

    return (
        <InputMask
            mask={mask}
            placeholder='dd.mm hh:mm'
            value={value}
            id={id}
            data-tip
            data-for={id}
            onChange={onChange}
            formatChars={formatChars}
            beforeMaskedValueChange={beforeMaskedValueChange}
        >
        </InputMask>
    );
}

export default DateInput