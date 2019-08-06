import React from "react";
import { ResponsiveSunburst } from '@nivo/sunburst';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
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
                            "name": "xAxis",
                            "color": "hsl(153, 70%, 50%)",
                            "loc": 188179
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
                },
                {
                    "name": "pie",
                    "color": "hsl(94, 70%, 50%)",
                    "children": [
                        {
                            "name": "chart",
                            "color": "hsl(252, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pie",
                                    "color": "hsl(223, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "outline",
                                            "color": "hsl(31, 70%, 50%)",
                                            "loc": 77174
                                        },
                                        {
                                            "name": "slices",
                                            "color": "hsl(281, 70%, 50%)",
                                            "loc": 92738
                                        },
                                        {
                                            "name": "bbox",
                                            "color": "hsl(95, 70%, 50%)",
                                            "loc": 197858
                                        }
                                    ]
                                },
                                {
                                    "name": "donut",
                                    "color": "hsl(131, 70%, 50%)",
                                    "loc": 20136
                                },
                                {
                                    "name": "gauge",
                                    "color": "hsl(173, 70%, 50%)",
                                    "loc": 134546
                                }
                            ]
                        },
                        {
                            "name": "legends",
                            "color": "hsl(211, 70%, 50%)",
                            "loc": 196005
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
            "name": "utils",
            "color": "hsl(3, 70%, 50%)",
            "children": [
                {
                    "name": "randomize",
                    "color": "hsl(66, 70%, 50%)",
                    "loc": 7656
                },
                {
                    "name": "resetClock",
                    "color": "hsl(47, 70%, 50%)",
                    "loc": 33154
                },
                {
                    "name": "noop",
                    "color": "hsl(59, 70%, 50%)",
                    "loc": 27518
                },
                {
                    "name": "tick",
                    "color": "hsl(289, 70%, 50%)",
                    "loc": 186453
                },
                {
                    "name": "forceGC",
                    "color": "hsl(99, 70%, 50%)",
                    "loc": 94506
                },
                {
                    "name": "stackTrace",
                    "color": "hsl(58, 70%, 50%)",
                    "loc": 85179
                },
                {
                    "name": "dbg",
                    "color": "hsl(212, 70%, 50%)",
                    "loc": 108776
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
                },
                {
                    "name": "city",
                    "color": "hsl(18, 70%, 50%)",
                    "loc": 116739
                },
                {
                    "name": "animal",
                    "color": "hsl(106, 70%, 50%)",
                    "loc": 5277
                },
                {
                    "name": "movie",
                    "color": "hsl(247, 70%, 50%)",
                    "loc": 156730
                },
                {
                    "name": "user",
                    "color": "hsl(171, 70%, 50%)",
                    "loc": 110924
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
                    "name": "intersect",
                    "color": "hsl(331, 70%, 50%)",
                    "loc": 94442
                },
                {
                    "name": "merge",
                    "color": "hsl(111, 70%, 50%)",
                    "loc": 12163
                },
                {
                    "name": "reverse",
                    "color": "hsl(242, 70%, 50%)",
                    "loc": 138639
                },
                {
                    "name": "toArray",
                    "color": "hsl(247, 70%, 50%)",
                    "loc": 120462
                },
                {
                    "name": "toObject",
                    "color": "hsl(110, 70%, 50%)",
                    "loc": 39863
                },
                {
                    "name": "fromCSV",
                    "color": "hsl(271, 70%, 50%)",
                    "loc": 60043
                },
                {
                    "name": "slice",
                    "color": "hsl(341, 70%, 50%)",
                    "loc": 61792
                },
                {
                    "name": "append",
                    "color": "hsl(155, 70%, 50%)",
                    "loc": 145748
                },
                {
                    "name": "prepend",
                    "color": "hsl(35, 70%, 50%)",
                    "loc": 10473
                },
                {
                    "name": "shuffle",
                    "color": "hsl(349, 70%, 50%)",
                    "loc": 175068
                },
                {
                    "name": "pick",
                    "color": "hsl(47, 70%, 50%)",
                    "loc": 90309
                },
                {
                    "name": "plouc",
                    "color": "hsl(71, 70%, 50%)",
                    "loc": 41745
                }
            ]
        },
        {
            "name": "text",
            "color": "hsl(113, 70%, 50%)",
            "children": [
                {
                    "name": "trim",
                    "color": "hsl(143, 70%, 50%)",
                    "loc": 22258
                },
                {
                    "name": "slugify",
                    "color": "hsl(335, 70%, 50%)",
                    "loc": 156866
                },
                {
                    "name": "snakeCase",
                    "color": "hsl(358, 70%, 50%)",
                    "loc": 78383
                },
                {
                    "name": "camelCase",
                    "color": "hsl(163, 70%, 50%)",
                    "loc": 95255
                },
                {
                    "name": "repeat",
                    "color": "hsl(31, 70%, 50%)",
                    "loc": 93642
                },
                {
                    "name": "padLeft",
                    "color": "hsl(98, 70%, 50%)",
                    "loc": 177636
                },
                {
                    "name": "padRight",
                    "color": "hsl(223, 70%, 50%)",
                    "loc": 76002
                },
                {
                    "name": "sanitize",
                    "color": "hsl(124, 70%, 50%)",
                    "loc": 47019
                },
                {
                    "name": "ploucify",
                    "color": "hsl(122, 70%, 50%)",
                    "loc": 62323
                }
            ]
        },
        {
            "name": "misc",
            "color": "hsl(235, 70%, 50%)",
            "children": [
                {
                    "name": "whatever",
                    "color": "hsl(171, 70%, 50%)",
                    "children": [
                        {
                            "name": "hey",
                            "color": "hsl(331, 70%, 50%)",
                            "loc": 51133
                        },
                        {
                            "name": "WTF",
                            "color": "hsl(113, 70%, 50%)",
                            "loc": 171194
                        },
                        {
                            "name": "lol",
                            "color": "hsl(196, 70%, 50%)",
                            "loc": 23274
                        },
                        {
                            "name": "IMHO",
                            "color": "hsl(52, 70%, 50%)",
                            "loc": 82602
                        }
                    ]
                },
                {
                    "name": "other",
                    "color": "hsl(255, 70%, 50%)",
                    "loc": 55530
                },
                {
                    "name": "crap",
                    "color": "hsl(4, 70%, 50%)",
                    "children": [
                        {
                            "name": "crapA",
                            "color": "hsl(266, 70%, 50%)",
                            "loc": 87835
                        },
                        {
                            "name": "crapB",
                            "color": "hsl(320, 70%, 50%)",
                            "children": [
                                {
                                    "name": "crapB1",
                                    "color": "hsl(299, 70%, 50%)",
                                    "loc": 89252
                                },
                                {
                                    "name": "crapB2",
                                    "color": "hsl(293, 70%, 50%)",
                                    "loc": 66452
                                },
                                {
                                    "name": "crapB3",
                                    "color": "hsl(168, 70%, 50%)",
                                    "loc": 84894
                                },
                                {
                                    "name": "crapB4",
                                    "color": "hsl(198, 70%, 50%)",
                                    "loc": 82126
                                }
                            ]
                        }
                    ]
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