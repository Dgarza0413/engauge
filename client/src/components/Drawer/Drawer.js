import React from 'react';
import { withRouter, Link } from "react-router-dom";
import "./style.css";

const links = [
    {
        name: "+ Prod",
        icon: "fas fa-folder-plus fa-3x",
        pathname: "prod/new"
    }, {
        name: "+ Report",
        icon: "fas fa-credit-card fa-3x",
        pathname: "report/new"
    }, {
        name: "+ Recomp",
        icon: "fas fa-file-signature fa-3x",
        pathname: "recomp/new"
    }
]


const SecondaryDrawer = ({ id }) => {
    return (
        <div className="menu-secondary text-center">
            {links.map((text, index) => (
                <div className="mb-3">
                    <Link to={{ pathname: `/welltable/${id}/${text.pathname}` }} key={index}>
                        <div className="on-hover">
                            <i className={text.icon}></i>
                            <h6>{text.name}</h6>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default SecondaryDrawer;