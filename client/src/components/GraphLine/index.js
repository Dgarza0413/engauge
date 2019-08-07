import React from "react";
import { ResponsiveLine } from '@nivo/line'

const MyResponsiveLine = ({ data = [
    {
        "id": "totalOil",
        "color": "hsl(292, 70%, 50%)",
        "data": [
            {
                "id": "BO",
                "x": "05/01/2019",
                "y": 118
            },
            {
                "x": "05/02/2019",
                "y": 259
            },
            {
                "x": "05/03/2019",
                "y": 199
            },
            {
                "x": "05/04/2019",
                "y": 125
            },
            {
                "x": "05/05/2019",
                "y": 238
            },
            {
                "x": "05/06/2019",
                "y": 116
            },
            {
                "x": "05/07/2019",
                "y": 291
            },
            {
                "x": "05/08/2019",
                "y": 252
            },
            {
                "x": "05/09/2019",
                "y": 283
            },
            {
                "x": "05/10/2019",
                "y": 150
            },
            {
                "x": "05/12/2019",
                "y": 142
            },
            {
                "x": "05/13/2019",
                "y": 224
            }
        ]
    },
    {
        "id": "totalGas",
        "color": "hsl(152, 70%, 50%)",
        "data": [
            {
                "x": "05/01/2019",
                "y": 218
            },
            {
                "x": "05/02/2019",
                "y": 359
            },
            {
                "x": "05/03/2019",
                "y": 400
            },
            {
                "x": "05/04/2019",
                "y": 250
            },
            {
                "x": "05/05/2019",
                "y": 1000
            },
            {
                "x": "05/06/2019",
                "y": 1116
            },
            {
                "x": "05/07/2019",
                "y": 231
            },
            {
                "x": "05/08/2019",
                "y": 352
            },
            {
                "x": "05/09/2019",
                "y": 683
            },
            {
                "x": "05/10/2019",
                "y": 450
            },
            {
                "x": "05/12/2019",
                "y": 442
            },
            {
                "x": "05/13/2019",
                "y": 224
            }
        ]
    },
    {
        "id": "totalWater",
        "color": "hsl(157, 70%, 50%)",
        "data": [
            {
                "x": "05/01/2019",
                "y": 118
            },
            {
                "x": "05/02/2019",
                "y": 259
            },
            {
                "x": "05/03/2019",
                "y": 199
            },
            {
                "x": "05/04/2019",
                "y": 125
            },
            {
                "x": "05/05/2019",
                "y": 238
            },
            {
                "x": "05/06/2019",
                "y": 116
            },
            {
                "x": "05/07/2019",
                "y": 291
            },
            {
                "x": "05/08/2019",
                "y": 252
            },
            {
                "x": "05/09/2019",
                "y": 283
            },
            {
                "x": "05/10/2019",
                "y": 150
            },
            {
                "x": "05/12/2019",
                "y": 142
            },
            {
                "x": "05/13/2019",
                "y": 224
            }
        ]
    }
] }) => (
        <ResponsiveLine
            data={data}
            margin={{ top: 60, right: 60, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
            axisTop={null}
            axisRight={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'MCF',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Timeline',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'BBLS',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{ scheme: 'nivo' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'top-right',
                    direction: 'row',
                    justify: false,
                    translateX: 60,
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

export default MyResponsiveLine;