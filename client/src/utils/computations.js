import moment from 'moment';

export const combineProduction = (data) => {
    const newObj = [];

    for (let i = 0; i < data.length; i++) {
        const date = moment(data[i].date).format('MM/DD/YYYY');
        if (!newObj[date]) {
            newObj[date] = {
                date: date,
                water: [],
                oil: [],
                gas: [],
            };
            newObj[date].oil.push(data[i].oil);
            newObj[date].gas.push(data[i].gas);
            newObj[date].water.push(data[i].water);
        } else {
            newObj[date].oil.push(data[i].oil);
            newObj[date].gas.push(data[i].gas);
            newObj[date].water.push(data[i].water);
        }
    }
    for (let key in newObj) {
        let gas = newObj[key].gas;
        let oil = newObj[key].oil;
        let water = newObj[key].water;
        let totalGas = gas.reduce((acc, cur) => acc + cur);
        let totalOil = oil.reduce((acc, cur) => acc + cur);
        let totalWater = water.reduce((acc, cur) => acc + cur);
        newObj[key].gas = totalGas;
        newObj[key].oil = totalOil;
        newObj[key].water = totalWater;
    }

    const totalGas = data
        .map(prodData => prodData.gas)
        .reduce(function (accumulator, prod) {
            return accumulator + prod;
        });
    const totalOil = data
        .map(prodData => prodData.oil)
        .reduce(function (accumulator, prod) {
            return accumulator + prod;
        });
    const totalWater = data
        .map(prodData => prodData.water)
        .reduce(function (accumulator, prod) {
            return accumulator + prod;
        });

    return { newObj, totalGas, totalOil, totalWater }
}


export const combineReport = (data) => {
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
    return newObj
}

export const combineCost = (data) => {
    const newObj = [];

    for (let i = 0; i < data.length; i++) {
        const name = data[i].type
        if (!newObj[name]) {
            newObj[name] = {
                id: data[i].type || 'no Id',
                label: data[i].type || 'no Id',
                value: [],
                color: 'hsl(323, 70%, 50%)'
            }
            newObj[name].value.push(data[i].cost)
        } else {
            newObj[name].value.push(data[i].cost || 0)
        }
    }

    for (let key in newObj) {
        let total = newObj[key].value
        let totalSum = total.reduce((acc, cur) => acc + cur, 0)
        newObj[key].value = totalSum
    }
    return newObj
}


export const groupReport = (data) => {
    const newObj = [];

    for (var i = 0; i < data.length; i++) {
        const name = data[i].type
        if (!newObj[name]) {
            newObj[name] = {
                id: data[i].type || 'no Id',
                label: data[i].type || 'no Id',
                value: [1],
                color: 'hsl(323, 70%, 50%)'
            }
        } else {
            newObj[name].value.push(1)
        }
    }

    for (let key in newObj) {
        let total = newObj[key].value
        let totalSum = total.reduce((acc, cur) => acc + cur)
        newObj[key].value = totalSum
    }
    return newObj
}