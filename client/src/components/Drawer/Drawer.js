import React from 'react';
import { withRouter, Link } from "react-router-dom";
import axios from 'axios';
import "./style.css";

const links = [
    {
        name: "Dashboard",
        icon: "fas fa-chart-line",
    }, {
        name: "Revenue",
        icon: "fas fa-credit-card",
    }, {
        name: "Reports",
        icon: "fas fa-file-signature",
    }, {
        name: "Facilities",
        icon: "fas fa-warehouse",
    }, {
        name: "WellTable",
        icon: "fas fa-fill",
    }, {
        name: "Map",
        icon: "fas fa-map-marked-alt",
    },
]


const SecondaryDrawer = () => {
    return (
        <div>
            {/* <div className="drawer-container slide-right">
                <i class="fas fa-bars toggle"
                //  onClick={() => this.handleToggle()}
                ></i>
            </div> */}
            <div className="menu-secondary nav-active">
                <div className="links">
                    {links.map((text, index) => (
                        <Link to={"/" + text.name.toLowerCase()} key={index}>
                            <h6><i className={text.icon}></i>{text.name}</h6>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SecondaryDrawer;