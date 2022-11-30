import React from 'react';
import './optionsForm.sass';
import {Formik} from 'formik'
import * as yup from 'yup'
import Button from "../../UiKit/Button/Button";
import Selects from "../../UiKit/Select/Select";
import {useDispatch} from "react-redux";
import {setSchedulesDataThunkCreator} from "../../../redux/schedulesSlice";
import SelectChecked from "../../UiKit/SelectChecked/SelectChecked";
import ReactTooltip from "react-tooltip";
import DateInput from "../../UiKit/DateInput/DateInput";


const OptionsForm = ({ ...attr}) => {

    const validationsSchema = yup.object().shape({
        startDate: yup.string().matches(/[0-9]{2}.[0-9]{2} [0-9]{2}:[0-9]{2}/, 'Не соответсвует формату').required('Обязательно'),
        endDate: yup.string().matches(/[0-9]{2}.[0-9]{2} [0-9]{2}:[0-9]{2}/, 'Не соответсвует формату').required('Обязательно'),
    });

    let dispatch = useDispatch()

    let submitStore = (data) => {
        if (data.direction.length === 0) {
            alert('Выберите направление')
        } else {
            dispatch(setSchedulesDataThunkCreator({startDateTime: data.startDate,
                endDateTime: data.endDate,
                direction: data.direction,
                interval: {
                    hour: data.hour,
                    minute: data.minute,
                    second: data.second
                }}))
        }
    }

    const directions = [
        { name: 'Направление 1', code: '1' },
        { name: 'Направление 2', code: '2' },
        { name: 'Направление 3', code: '3' },
        { name: 'Направление 4', code: '4' }
    ];

    const hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    const minute = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]

    return(
        <Formik initialValues={{
            startDate: '',
            endDate: '',
            hour: '1',
            minute: '',
            second: '',
            direction: ''
        }}
                validateOnBlur
                onSubmit={(data) => { submitStore(data) }} //dispatch(isUserThunkCreator(data.emailA, data.passwordA))
                validationSchema={validationsSchema}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <div className="options-form">

                    <div className="options-form__period">
                        <p className="options-form__headline">Период:</p>
                        <p className="options-form__text">c</p>
                        <DateInput
                            value={values.startDate}
                            onChange={handleChange}
                            id='startDate'
                        >
                        </DateInput>
                        <ReactTooltip id="startDate" place='bottom'>
                            <span>Дата начала</span>
                        </ReactTooltip>
                        <p className="options-form__text">до</p>
                        <DateInput
                            value={values.endDate}
                            onChange={handleChange}
                            id='endDate'
                        >
                        </DateInput>
                        <ReactTooltip id="endDate" place='bottom'>
                            <span>Дата конца</span>
                        </ReactTooltip>
                    </div>

                    <div className="options-form__interval">
                        <p className="options-form__headline">Интервал:</p>
                        <Selects
                            id='hour'
                            dateFor='hourTooltip'
                            options={hours}
                            value={values.hour}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <ReactTooltip id="hourTooltip" place='bottom'>
                            <span>Выбор часа</span>
                        </ReactTooltip>
                        <p className='options-form__time'>ч.</p>
                        <Selects
                            id='minute'
                            dateFor='minuteTooltip'
                            options={minute}
                            value={values.minute}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <ReactTooltip id="minuteTooltip" place='bottom'>
                            <span>Выбор минут</span>
                        </ReactTooltip>
                        <p className='options-form__time'>м.</p>
                        <Selects
                            id='second'
                            dateFor='secondTooltip'
                            options={minute}
                            value={values.second}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <ReactTooltip id="secondTooltip" place='bottom'>
                            <span>Выбор секунд</span>
                        </ReactTooltip>
                        <p className='options-form__time'>с.</p>
                    </div>

                    <div className="options-form__direction">
                        <p className="options-form__headline" >Направление:</p>
                        <SelectChecked
                            id='direction'
                            dateFor='directionTooltip'
                            options={directions}
                            value={values.direction}
                            onChange={handleChange}
                        />
                        <ReactTooltip id="directionTooltip" place='bottom'>
                            <span>Выбор направлений</span>
                        </ReactTooltip>
                    </div>

                    <div className="options-form__btn">
                        <Button
                            disable={errors.startDate || errors.endDate}
                            func={() => handleSubmit()}
                            type={'submit'}
                        >Построить</Button>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default OptionsForm