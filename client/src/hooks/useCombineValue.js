import react, { useState } from "react";
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

    // for (let key in newObj) {
    //     let gas = newObj[key].gas;
    //     let oil = newObj[key].oil;
    //     let water = newObj[key].water;
    //     let totalGas = gas.reduce((acc, cur) => acc + cur);
    //     let totalOil = oil.reduce((acc, cur) => acc + cur);
    //     let totalWater = water.reduce((acc, cur) => acc + cur);
    //     newObj[key].gas = totalGas;
    //     newObj[key].oil = totalOil;
    //     newObj[key].water = totalWater;
    // }

    // console.log(newObj)

    const value = setReportData(Object.values(newObj))
    // console.log(value)
    return [value]
}

export default useCombineValue
