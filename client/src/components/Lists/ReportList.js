import React from 'react';
import ReportCard from "../Card/ReportCard";

const ReportList = ({ reportData }) => {
    return (
        <>
            {reportData.map((e, i) => {
                return (
                    <React.Fragment key={i}>
                        <ReportCard
                            title={e.title}
                            summary={e.summary}
                            supervisor={e.supervisor}
                            date={e.date}
                            cost={e.cost}
                            id={e._id}
                        />
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default ReportList;