import React from "react";
import { ResponsiveSunburst } from '@nivo/sunburst';

const MyResponsiveSunburst = ({ data = {
    "name": "nivo",
    "color": "hsl(246, 70%, 50%)",
    "children": [
        {
            "name": "viz",
            "color": "hsl(227, 70%, 50%)",
            "children": [
                {
                    "name": "stack",
                    "color": "hsl(103, 70%, 50%)",
                    "children": [
                        {
                            "name": "chart",
                            "color": "hsl(271, 70%, 50%)",
                            "loc": 127177
                        },
                        {
                            "name": "yAxis",
                            "color": "hsl(258, 70%, 50%)",
                            "loc": 170485
                        },
                        {
                            "name": "layers",
                            "color": "hsl(152, 70%, 50%)",
                            "loc": 79014
                        }
                    ]
                }
            ]
        },
        {
            "name": "colors",
            "color": "hsl(205, 70%, 50%)",
            "children": [
                {
                    "name": "rgb",
                    "color": "hsl(29, 70%, 50%)",
                    "loc": 132071
                },
                {
                    "name": "hsl",
                    "color": "hsl(47, 70%, 50%)",
                    "loc": 186269
                }
            ]
        },
        {
            "name": "generators",
            "color": "hsl(143, 70%, 50%)",
            "children": [
                {
                    "name": "address",
                    "color": "hsl(178, 70%, 50%)",
                    "loc": 140406
                }
            ]
        },
        {
            "name": "set",
            "color": "hsl(315, 70%, 50%)",
            "children": [
                {
                    "name": "clone",
                    "color": "hsl(319, 70%, 50%)",
                    "loc": 109767
                },
                {
                    "name": "plouc",
                    "color": "hsl(71, 70%, 50%)",
                    "loc": 41745
                }
            ]
        }
    ]
} }) => (
        <ResponsiveSunburst
            data={data}
            margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
            identity="name"
            value="loc"
            cornerRadius={2}
            borderWidth={1}
            borderColor="white"
            colors={{ scheme: 'nivo' }}
            childColor={{ from: 'color' }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={true}
        />
    )

export default MyResponsiveSunburst;