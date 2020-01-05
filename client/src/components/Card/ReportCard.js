import React from 'react';
import moment from 'moment';
import SectionTitle from '../../components/SectionTitle';
import Card from '../../components/Card';

import { Link } from 'react-router-dom';
import Button from '../Button';
import './style.css';

const ReportCard = ({ title, summary, supervisor, date, cost, id }) => {

    return (
        <div>
            <Card>
                <SectionTitle mb="5px">{title}</SectionTitle>
                <div>{summary}</div>
                <div>Supervisor: {supervisor}</div>
                <div>Date: {moment(date).format("MM/DD/YYYY")}</div>
                <div>{cost}</div>
                <Link to={{
                    pathname: "/welltable/" + id + "/report/update",
                    aboutProps: {
                        title: title,
                        summary: summary,
                        supervisor: supervisor,
                        date: date,
                        cost: cost,
                        id: id,
                    }
                }}>
                    <Button>Edit</Button>
                </Link>
            </Card>
        </div>
    )
}

export default ReportCard;