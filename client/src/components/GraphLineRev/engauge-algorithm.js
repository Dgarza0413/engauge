const obj = [
    {
        casingPSI: 123,
        choke: 0,
        date: "2019-08-22",
        gas: 1023,
        oil: 10023,
        tubingPSI: 0,
        water: 12223,
        __v: 0,
        _id: "5d4dba1dbe87e59edcde000b"
    },
    {
        casingPSI: 123,
        choke: 0,
        date: "2019-08-22",
        gas: 123,
        oil: 123,
        tubingPSI: 0,
        water: 1213,
        __v: 0,
        _id: "5d4dba1dbe87e59edcde000b"

    }, {
        casingPSI: 123,
        choke: 0,
        date: "2019-08-23",
        gas: 1023,
        oil: 1023,
        tubingPSI: 0,
        water: 123,
        __v: 0,
        _id: "5d4dba1dbe87e59edcde000b"

    }, {
        casingPSI: 123,
        choke: 0,
        date: "2019-08-23",
        gas: 123,
        oil: 123,
        tubingPSI: 0,
        water: 123,
        __v: 0,
        _id: "5d4dba1dbe87e59edcde000b"

    }
]
const newObj = []
for (let i = 0; i < obj.length; i++) {
    console.log(obj[i])
    if (!newObj[obj[i].date]) {
        newObj[obj[i].date] =
            {
                date: obj[i].date,
                water: [],
                oil: [],
                gas: []
            }
        const date = obj[i].date
        // newObj[date].date.push(obj[i].date) 
        newObj[date].oil.push(obj[i].oil)
        newObj[date].gas.push(obj[i].gas)
        newObj[date].water.push(obj[i].water)
    } else {
        const date = obj[i].date
        newObj[date].oil.push(obj[i].oil)
        newObj[date].gas.push(obj[i].gas)
        newObj[date].water.push(obj[i].water)
    }
}
// for(let i = 0; i < obj.length; i++){
//     const date = obj[i].date
//     newObj[date].oil.push(obj[i].oil)
//     newObj[date].gas.push(obj[i].gas)
//     newObj[date].water.push(obj[i].water)
// }
newObj

for (let key in newObj) {
    let gas = newObj[key].gas
    let oil = newObj[key].oil
    let water = newObj[key].water
    let totalGas = gas.reduce((acc, cur) => acc + cur)
    let totalOil = oil.reduce((acc, cur) => acc + cur)
    let totalWater = water.reduce((acc, cur) => acc + cur)

    console.log(totalGas)
    console.log(totalOil)
    console.log(totalWater)

    newObj[key].gas = totalGas
    newObj[key].oil = totalOil
    newObj[key].water = totalWater
}
console.log(Object.values(newObj))
const values = Object.values(newObj)

console.log(values)
console.log(values.map(d => d.date))


const data = [
    ["08/12/2019", 55],
    ["08/13/2019", 55],
    ["08/14/2019", 55],
    ["08/15/2019", 55],
    ["08/16/2019", 55],
    ["08/17/2019", 55]
]

console.log(data)
const newObj2 = {}
for (let i = 0; i < data.length; i++) {
    console.log(data[i][0])
    if (!newObj[data[i][0]]) {
        newObj2[data[i][0]] = {
            date: data[i][0],
            price: data[i][1]
        }
    }
    console.log(Object.values(newObj2))
}
