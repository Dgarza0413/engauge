import React from "react";
import { ResponsiveBar } from '@nivo/bar';

const Bar = (props) => {

    const data = [
        {
            "id": "Oil",
            "Oil": props.oil,
        },
        {
            "id": "Gas",
            "Gas": props.gas,
        },
        {
            "id": "Water",
            "Water": props.water,
        }
    ]

    return (
        <div className={props.class}>
            <ResponsiveBar
                data={data || []}
                keys={['Oil', 'Gas', 'Water']}
                indexBy="id"
                margin={{ top: 50, right: 30, bottom: 100, left: 60 }}
                padding={0.3}
                colors={["#6e6e6e", "#dcb567", "#69a8be"]}
                defs={[
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    }
                ]}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Quantity',
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
                legends={[
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
        </div>
    )
}

export default Bar;