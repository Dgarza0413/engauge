import React, { useState } from "react";
import FlexContainer from '../FlexContainer';
// import Button from '../Button';
import Button from 'react-bootstrap/Button';
import { ResponsiveCalendar } from '@nivo/calendar'

const Calendar = ({ data }) => {
    const [year, setYear] = useState(2018)
    return (
        <>
            <Button onClick={() => setYear(year - 1)}>
                Previous Year
            </Button>
            <Button onClick={() => setYear(year + 1)}>
                Next Year
            </Button>
            <ResponsiveCalendar
                data={data}
                from={`${year}-01-01`}
                to={`${year}-12-30`}
                emptyColor="#eeeeee"
                colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                yearSpacing={40}
                monthBorderColor="#ffffff"
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                legends={
                    [
                        {
                            anchor: 'bottom-right',
                            direction: 'row',
                            translateY: 36,
                            itemCount: 4,
                            itemWidth: 42,
                            itemHeight: 36,
                            itemsSpacing: 14,
                            itemDirection: 'right-to-left'
                        }
                    ]}
            />
        </>
    )
}

export default Calendar;
