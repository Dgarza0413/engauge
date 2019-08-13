import React from "react";
import { ResponsivePie } from '@nivo/pie';
import "./style.css";

function MyResponsivePie(props) {
    const data = [
        {
            "id": "Active",
            "label": "Wells Online",
            "value": props.wellIsOn,
            "color": "hsl(323, 70%, 50%)",
            "children": [
                {
                    "name": "test"
                }
            ]
        },
        {
            "id": "Inactive",
            "label": "Wells Offline",
            "value": props.wellIsOff,
            "color": "hsl(6, 70%, 50%)"
        }
    ]
    return (
        <div className={props.class}>
            <ResponsivePie
                data={data}
                margin={{ top: 0, right: 50, bottom: 80, left: 50 }}
                innerRadius={0.8}
                padAngle={0.7}
                // colors={{ scheme: 'orange_red' }}
                colors={["#84bfd3", "#acaeaf"]}
                borderWidth={3}
                borderColor="#ffffff"
                enableRadialLabels={false}
                enableSlicesLabels={false}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        translateY: 56,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}

            />
        </div>
    )

}

export default MyResponsivePie;