import React from "react";
import { ResponsiveLine } from '@nivo/line';
import moment from 'moment';

function MyResponsiveLine(props) {
    const oildata = props.well.map(d => (
        {
            "x": moment(d.date).format("MM/DD/YYYY"),
            "y": parseInt(d.oil)
        }
    ))
    const gasdata = props.well.map(d => (
        {
            "x": moment(d.date).format("MM/DD/YYYY"),
            "y": parseInt(d.gas)
        }
    ))
    const waterdata = props.well.map(d => (
        {
            "x": moment(d.date).format("MM/DD/YYYY"),
            "y": parseInt(d.water)
        }
    ))
    console.log(oildata)

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
    }
    ]
    return (
        <ResponsiveLine
            data={dataProd}
            margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', stacked: true, min: '0', max: '1600' }}
            // yScale={{ type: 'log', base: 10, max: "auto" }}
            curve="linear"
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
                legend: 'May 2019 Timeline',
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
            legends={
                [
                    {
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
                    }
                ]}
        />
    )
}

export default MyResponsiveLine;