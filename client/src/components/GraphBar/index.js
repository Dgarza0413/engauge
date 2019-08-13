import React from "react";
import { ResponsiveBar } from '@nivo/bar';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
function MyResponsiveBar(props) {
    console.log(props)
    const data = [
        {
            "fluid": "Oil",
            "Oil": props.oil,
            'waterDepthBBLS': 120
        },
        {
            "fluid": "Gas",
            "Gas": props.gas,
            'waterDepthBBLS': 50
        },
        {
            "fluid": "Water",
            "oilDepthBBLs": 200,
            'Water': props.water
        }
    ]
    return (
        < ResponsiveBar
            data={data}
            keys={["Oil", "Gas", "Water"]}
            colors={["#69a8be", "#d5b577"]}
            indexBy="fluid"
            margin={{ top: 50, right: 30, bottom: 100, left: 60 }
            }
            padding={0.3}
            // colors={{ scheme: 'nivo' }}
            colors={["#69a8be", "#d5b577"]}
            defs={
                [
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
            fill={
                [
                    {
                        match: {
                            id: 'oilDepthBBLs'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'watchDepthBBLs'
                        },
                        id: 'lines'
                    }
                ]}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'tankNum',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'BBLS',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={
                [
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 70,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    )
}
export default MyResponsiveBar;