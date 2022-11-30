import React from "react";
import './schedules-info.sass';
import Options from "../Options/Options";
import WhiteBlock from "../../hoc/WhiteBlock";
import ScheduleLine from "../UiKit/ScheduleLine/ScheduleLine";
import ScheduleCircle from "../UiKit/ScheduleCircle/ScheduleCircle";
import {useSelector} from "react-redux";


const SchedulesInfo = ({ ...attr}) => {

    let dataDirection = useSelector(store => store.schedules.directions)
    let dataCircle = useSelector(store => store.schedules.vehicle)

    let startDateTime = useSelector(store => store.schedules.initData.startDateTime)
    let endDateTime = useSelector(store => store.schedules.initData.endDateTime)

    let directionChecked = false
    if (dataDirection[0]) {
        directionChecked = dataDirection[0].data.length > 0
    }


    return (
        <div className='schedules-info'>
            <WhiteBlock Component={<Options />}/>
            {directionChecked ?
                <WhiteBlock headline='Средняя скорость'
                            dateStart={startDateTime}
                            dateEnd={endDateTime}
                            classes={'schedules-info__linear'}
                            Component={<ScheduleLine
                            data={dataDirection}/>}/>
                    :
                null
            }
            {dataCircle[0] ?
                <WhiteBlock headline='Состав потока'
                            dateStart={startDateTime}
                            dateEnd={endDateTime}
                            classes={'schedules-info__circle'}
                            Component={<ScheduleCircle
                            data={dataCircle}/>}/>
                    :
                null
            }
        </div>
    )

}
export default SchedulesInfo