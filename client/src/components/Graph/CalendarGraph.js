import React, { useState } from "react";
import FlexContainer from '../FlexContainer';
// import Button from '../Button';
import Button from 'react-bootstrap/Button';
import { ResponsiveCalendar } from '@nivo/calendar'
import { style } from '../Button';

const Calendar = ({ data }) => {
    const currentDate = new Date;
    const currentYear = currentDate.getFullYear()
    const [year, setYear] = useState(currentYear)
    return (
        <>
            <div className="position-absolute" style={{ top: '25px', right: '25px' }}>
                <Button className="mr-2" style={style.button} onClick={() => setYear(year - 1)}>
                    Previous Year
            </Button>
                <Button style={style.button} onClick={() => setYear(year + 1)}>
                    Next Year
            </Button>
            </div>
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
