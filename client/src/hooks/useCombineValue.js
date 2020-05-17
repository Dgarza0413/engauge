import { useState } from "react";

const useCombineValue = () => {

    const [value, setValue] = useState({})

    API.getAllProdData()
        .then(res => {
            const obj = res.data;
            const newObj = [];
            for (let i = 0; i < obj.length; i++) {
                const date = moment(obj[i].date).format("MM/DD/YYYY");
                if (!newObj[date]) {
                    newObj[date] =
                    {
                        date: date,
                        water: [],
                        oil: [],
                        gas: []
                    }
                    newObj[date].oil.push(obj[i].oil)
                    newObj[date].gas.push(obj[i].gas)
                    newObj[date].water.push(obj[i].water)
                } else {
                    newObj[date].oil.push(obj[i].oil)
                    newObj[date].gas.push(obj[i].gas)
                    newObj[date].water.push(obj[i].water)
                }
            }
            for (let key in newObj) {
                let gas = newObj[key].gas
                let oil = newObj[key].oil
                let water = newObj[key].water
                let totalGas = gas.reduce((acc, cur) => acc + cur)
                let totalOil = oil.reduce((acc, cur) => acc + cur)
                let totalWater = water.reduce((acc, cur) => acc + cur)
                newObj[key].gas = totalGas
                newObj[key].oil = totalOil
                newObj[key].water = totalWater
            }
            const objValue = Object.values(newObj)
            this.setState({
                wellData: objValue,
                currentProd: objValue[objValue.length - 1],
            })
        })
        .catch(err => console.log(err))

    const handleInputChange = (event) => {
        event.persist()
        setValue(values => {
            return {
                ...values,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleBind = (event) => {
        setValue(event)
    }


    return [value, handleInputChange, handleBind]
}

export default useInputChange;

