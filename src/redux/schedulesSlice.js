import {createSlice} from "@reduxjs/toolkit";
import {generateDataDirection, generateDataVehicle} from "../dataSchedules/dataSchedules";

const schedulesSlice = createSlice({
    name: 'schedules',
    initialState: {
        error: '',
        initData: {
            startDateTime: '',
            endDateTime: '',
            direction: [],
            interval: {
                hour: 0,
                minute: 0,
                second: 0
            }
        },
        directions: [],
        vehicle: []
    },
    reducers: {
        setSchedulesData(state, action) {
            state.initData = action.payload
        },
        getSchedulesData(state) {
            state.directions = generateDataDirection({
                interval: state.initData.interval,
                directions: state.initData.direction,
                startDate: state.initData.startDateTime,
                endDate: state.initData.endDateTime
            })
        },
        getVehicleData(state, action) {
            state.vehicle = generateDataVehicle()
        }
    }
})

export const setSchedulesDataThunkCreator = (data) => {
    return (dispatch, getState) => {
        let vehicleLenght = getState().schedules.vehicle.length

        dispatch(setSchedulesData(data))
        dispatch(getSchedulesData())

        if (vehicleLenght === 0)
            dispatch(getVehicleData())

    }
}

export default schedulesSlice.reducer
export const {getSchedulesData, getVehicleData, setSchedulesData} = schedulesSlice.actions