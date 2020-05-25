import React from "react";
import { ResponsivePie } from '@nivo/pie';
import "./style.css";

const MyResponsivePie = (props) => {
    console.log(props)

    const data = [
        {
            "id": "Active",
            "label": "Wells Online",
            "value": parseInt(props.wellStatus.isOn),
            "color": "hsl(323, 70%, 50%)",
        },
        {
            "id": "Inactive",
            "label": "Wells Offline",
            "value": parseInt(props.wellStatus.isOff),
            "color": "hsl(6, 70%, 50%)"
        }
    ]

    return (
        <div className={props.class}>
            <ResponsivePie
                data={data}
                margin={{ top: 0, right: 50, bottom: 80, left: 50 }}
                colors={["#84bfd3", "#acaeaf"]}
                borderWidth={3}
                borderColor="#ffffff"
                enableRadialLabels={true}
                enableSlicesLabels={true}
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