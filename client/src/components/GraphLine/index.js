import React from "react";
import { ResponsiveLine } from '@nivo/line'

function MyResponsiveLine(props) {
    const oildata = props.well.map(d => (
        {
            "x": d.date,
            "y": parseInt(d.oil)
        }
    ))
    const gasdata = props.well.map(d => (
        {
            "x": d.date,
            "y": parseInt(d.gas)
        }
    ))
    const waterdata = props.well.map(d => (
        {
            "x": d.date,
            "y": parseInt(d.water)
        }
    ))
    console.log("oil data" + oildata)
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

    const MyResponsiveLineData = [
        {
            "id": "Oil",
            "color": "hsl(292, 70%, 50%)",
            "data": [
                {
                    "x": "05/01",
                    "y": 118
                },
                {
                    "x": "05/02",
                    "y": 259
                },
                {
                    "x": "05/03",
                    "y": 199
                },
                {
                    "x": "05/04",
                    "y": 125
                },
                {
                    "x": "05/05",
                    "y": 238
                },
                {
                    "x": "05/06",
                    "y": 116
                },
                {
                    "x": "05/07",
                    "y": null
                },
                {
                    "x": "05/08",
                    "y": 252
                },
                {
                    "x": "05/09",
                    "y": 283
                },
                {
                    "x": "05/10",
                    "y": 150
                },
                {
                    "x": "05/12",
                    "y": 142
                },
                {
                    "x": "05/13",
                    "y": 224
                }
            ]
        },
        {
            "id": "Gas",
            "color": "hsl(152, 70%, 50%)",
            "data": [
                {
                    "x": "05/01",
                    "y": 218
                },
                {
                    "x": "05/02",
                    "y": 359
                },
                {
                    "x": "05/03",
                    "y": 400
                },
                {
                    "x": "05/04",
                    "y": 250
                },
                {
                    "x": "05/05",
                    "y": 1000
                },
                {
                    "x": "05/06",
                    "y": 1116
                },
                {
                    "x": "05/07",
                    "y": 231
                },
                {
                    "x": "05/08",
                    "y": 352
                },
                {
                    "x": "05/09",
                    "y": 683
                },
                {
                    "x": "05/10",
                    "y": 450
                },
                {
                    "x": "05/12",
                    "y": 442
                },
                {
                    "x": "05/13",
                    "y": 224
                }
            ]
        },
        {
            "id": "Water",
            "color": "hsl(157, 70%, 50%)",
            "data": [
                {
                    "x": "05/01",
                    "y": 118
                },
                {
                    "x": "05/02",
                    "y": 259
                },
                {
                    "x": "05/03",
                    "y": 199
                },
                {
                    "x": "05/04",
                    "y": 125
                },
                {
                    "x": "05/05",
                    "y": 238
                },
                {
                    "x": "05/06",
                    "y": 116
                },
                {
                    "x": "05/07",
                    "y": 291
                },
                {
                    "x": "05/08",
                    "y": 252
                },
                {
                    "x": "05/09",
                    "y": 283
                },
                {
                    "x": "05/10",
                    "y": 150
                },
                {
                    "x": "05/12",
                    "y": 142
                },
                {
                    "x": "05/13",
                    "y": 224
                }
            ]
        }
    ]
    return (
        <ResponsiveLine
            // data={MyResponsiveLineData}
            data={dataProd}


            // data={props.well.map(d => {
            //     const date = d.date
            //     const dataPoints = [d.oil, d.gas, d.water]
            //     const fluidTypes = ["water", "Oil", "Gas"]
            //     return {
            //         "id": fluidTypes,
            //         "color": "hsl(157, 70%, 50%)",
            //         "data": [{
            //             "y": props.well.water,
            //             "x": date
            //         }]
            //     }
            // })}
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