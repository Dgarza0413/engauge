import React from "react";
import { ResponsiveLine } from '@nivo/line'
import moment from 'moment'

const MyResponsiveLine = ({ oil, gas }) => {
    const color = "hsl(157, 70%, 50%)";

    // yScale={{
    //     type: 'log',
    //     base: 10,
    //     stacked: true,
    //     min: 'auto',
    //     max: 'auto',
    //     reverse: true
    // }}   

    const oildata = oil.map(d => (
        {
            "x": moment(d.date).format("MM-DD"),
            "y": parseInt(d.price)
        }
    ));

    const gasdata = gas.map(d => (
        {
            "x": moment(d.date).format("MM-DD"),
            "y": parseInt(d.price)
        }
    ));

    const dataProd = [
        {
            "id": "oilPrice",
            "color": color,
            "data": oildata
        },
        {
            "id": "gasPrice",
            "color": color,
            "data": gasdata
        }
    ]
    return (
        <ResponsiveLine
            data={dataProd}
            margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                stacked: false,
                min: '0',
                max: 'auto',
            }}
            curve="linear"
            axisTop={null}
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
                legend: 'Price',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={["#54c283", "#f75b5b", "#69a8be"]}
            // colors={["#6e6e6e"]}
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