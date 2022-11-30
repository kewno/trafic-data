//data for circle
export let generateDataVehicle = () => {
    return [
        {'id': 'Легковые', 'label' : 'Легковые', 'value': randomNumber(10, 100)},
        {'id': 'Мотоц./велос-ды', 'label' : 'Мотоц./велос-ды', 'value': randomNumber(10, 100)},
        {'id': 'Грузовые', 'label' : 'Грузовые', 'value': randomNumber(10, 100)},
        {'id': 'Автобусы', 'label' : 'Автобусы', 'value': randomNumber(10, 100)},
        {'id': 'Автопоезда', 'label' : 'Автопоезда', 'value': randomNumber(10, 100)}
    ];
}

//data for linear
export let generateDataDirection = ({directions, startDate, endDate, interval}) => {
    let dataSpeed = [];

    //for coll direction
    directions.forEach(el => {
        dataSpeed.push({"id": el.name, "data": [], "color": "hsl(236, 70%, 50%)"})
    })
    
    let currentYear = getCurrentYear()

    //get start data from string
    let arrStartDateTime = startDate.split(' ')
    let arrStartDate = arrStartDateTime[0].split('.')
    let arrStartTime = arrStartDateTime[1].split(':')

    //get end data from string
    let arrEndDateTime = endDate.split(' ')
    let arrEndDate = arrEndDateTime[0].split('.')
    let arrEndTime = arrEndDateTime[1].split(':')

    //create obj date for work
    let startDateTime = createDate(currentYear, arrStartDate[1], arrStartDate[0], arrStartTime[0], arrStartTime[1])
    let endDateTime = createDate(currentYear, arrEndDate[1], arrEndDate[0], arrEndTime[0], arrEndTime[1])


    while (startDateTime <= endDateTime) {
        //adding spacing
        addTime(startDateTime, interval)
        if (startDateTime <= endDateTime) {
            for (let i = 0; i < dataSpeed.length; i++) {
                // for 5 create 05
                let hour = setZeroForTime(startDateTime.getHours())
                let minute = setZeroForTime(startDateTime.getMinutes())

                dataSpeed[i].data.push({"x": `${hour}:${minute}`, "y": randomNumber(0, 90)})
            }
        }
    }

    return dataSpeed;
}

let createDate = (year, month, day, hours, minute) => {
    return new Date(year, month, day, hours, minute)
}

let getCurrentYear = () => {
    return (new Date()).getFullYear()
}

let setZeroForTime = (time) => {
    if (time.toString().length === 1) time = `0${time}`
    return time;
}

let addTime = (initTime, times) => {
    if (times.hour) initTime.setHours(initTime.getHours() + +times.hour)
    if (times.minute) initTime.setMinutes(initTime.getMinutes() + +times.minute)
    if (times.second) initTime.setSeconds(initTime.getSeconds() + +times.second)
}

let randomNumber = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}