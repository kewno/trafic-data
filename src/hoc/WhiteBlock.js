import React from 'react';
import './white-block.sass';

const WhiteBlock = ({Component, id, classes, headline, dateStart, dateEnd, ...attr}) => {
    return (
        <div className={`white-block ${classes}`} data-tip data-for={id}>
            {headline ?
                <div className="white-block__info">
                    <h2 className="white-block__headline">{headline}</h2>
                    <p className="white-block__date">{`c ${dateStart}`}</p>
                    <p className="white-block__date">{`до ${dateEnd}`}</p>
                </div>
                :
                null
            }
            {Component}
        </div>
    )
}

export default WhiteBlock