import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const links = [
    {
        name: "+ Prod",
        icon: "fas fa-folder-plus fa-1x",
        pathname: "production/add"
    }, {
        name: "+ Report",
        icon: "fas fa-credit-card fa-1x",
        pathname: "report/add"
    }, {
        name: "+ Recomp",
        icon: "fas fa-file-signature fa-1x",
        pathname: "recompletion/add"
    }
]


const SecondaryDrawer = ({ id }) => {
    return (
        <div className="menu-secondary text-center">
            {links.map((text, index) => (
                <div className="mb-3">
                    <Link to={`/submit/${text.pathname}/${id}`} key={index}>
                        <div className="on-hover">
                            <i className={text.icon}></i>
                            <p>{text.name}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default SecondaryDrawer;