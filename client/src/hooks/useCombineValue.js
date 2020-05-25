import { useState } from "react";
import API from '../utils/API';
import moment from 'moment'

const useCombineValue = (data, setReportData) => {
    const newObj = [];

    for (var i = 0; i < data.length; i++) {
        const day = moment(data[i].date).format('YYYY-MM-DD');
        if (!newObj[day]) {
            newObj[day] = {
                day: day,
                value: []
            }
            newObj[day].value.push(1)
        } else {
            newObj[day].value.push(1)
        }
    }

    for (let key in newObj) {
        let value = newObj[key].value
        let day = newObj[key].day
        let totalValue = value.reduce((acc, cur) => acc + cur);
        newObj[key].day = day;
        newObj[key].value = totalValue;
    }
    console.log(newObj)

    setReportData(Object.values(newObj))
}

export default useCombineValue
