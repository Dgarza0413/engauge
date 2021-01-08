import React, { useState } from "react";
import moment from "moment";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SectionTitle from '../SectionTitle';

import { ResponsiveLine } from '@nivo/line';

const MyResponsiveLine = (props) => {
    const [filterValue, setFilterValue] = useState('month');
    const [increment, setIncrement] = useState(0);
    const { well } = props

    // const filterValueFn = () => {
    const current = new Date;
    const currentMonth = current.getMonth();
    const currentYear = current.getFullYear();

    const test = well.map(e => e.date.split('/'))

    // const test = well.filter(e => e.date === currentMonth)

    console.log(test)

    // const well.filter(e => e.date.split('/') === )
    // }

    console.log(well)

    const oildata = props.well.map(d => (
        {
            "x": moment(d.date).format("MM-DD"),
            "y": parseInt(d.oil)
        }
    ))
    const gasdata = props.well.map(d => (
        {
            "x": moment(d.date).format("MM-DD"),
            "y": parseInt(d.gas)
        }
    ))
    const waterdata = props.well.map(d => (
        // (d.water === undefined) ?
        // {
        //     "x": moment(d.date).format("MM-DD"),
        //     "y": 0
        // } :
        {
            "x": moment(d.date).format("MM-DD"),
            "y": parseInt(d.water)
        }
    ))

    const color = "hsl(157, 70%, 50%)";
    const dataProd = [{
        "id": "Oil",
        "color": color,
        "data": oildata
    },
    {
        "id": "Gas",
        "color": color,
        "data": gasdata

    },
    {
        "id": "Water",
        "color": color,
        "data": waterdata
    }]

    console.log(dataProd)

    return (
        <>
            <SectionTitle className="mb-0">Production</SectionTitle>
            {/* <ButtonToolbar>
                <ButtonGroup className="graph-button" aria-label="Basic example">
                    <Button variant="secondary">{'<'}</Button>
                    <Button variant="secondary">{'>'}</Button>
                    <DropdownButton as={ButtonGroup} title={filterValue}>
                        <Dropdown.Item onClick={() => setFilterValue('month')}>Month</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </ButtonToolbar> */}
            <ResponsiveLine
                data={dataProd}
                margin={{ top: 40, right: 60, bottom: 70, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', stacked: false, min: '1', max: 'auto' }}
                // curve="linear"
                axisTop={null}
                axisRight={{
                    orient: 'left',
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'MCF',
                    legendOffset: 40,
                    legendPosition: 'middle'
                }}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: moment(Date.now()).format("MMMM YYYY") + ' Timeline',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'BBLS',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                // colors= {["#54c283", "#f75b5b", "#69a8be"]}
                colors={["#6e6e6e", "#dcb567", "#69a8be"]}
                areaOpacity={0.1}
                enableGridX={false}
                // enablePoints={false}
                pointColor={{ from: 'color', modifiers: [] }}
                pointBorderWidth={2}
                pointBorderColor="#ffffff"
                pointSize={8}
                pointLabel="y"
                pointLabelYOffset={- 12}
                // areaBlendMode="multiply"
                enableSlices="x"
                // enableArea={true}
                enableCrosshair={false}
                useMesh={true}
                legends={[{
                    anchor: 'top-right',
                    direction: 'row',
                    justify: false,
                    translateX: 75,
                    translateY: -40,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }]}
            />
            <br />
            <div></div>
        </>
    )
}

export default MyResponsiveLine;