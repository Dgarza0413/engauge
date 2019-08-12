import React from 'react';
import { Link } from "react-router-dom";
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
        name: "WellTable",
        icon: "fas fa-fill",
    }, {
        name: "Map",
        icon: "fas fa-map-marked-alt",
    }
]

class Drawer extends React.Component {
    handleLogout = () => {
        axios.get("/api/logout")
            .then(result => {
                this.setState({ welcomeEmail: ""});
        });
    }
    render() {
        return (
            <div className="drawer-container">
                <div className="navbar">
                    <h4>Engauge</h4>
                    <div className="links">
                        {links.map((text, index) => (
                            <Link to={"/" + text.name.toLowerCase()} key={index}>
                                <h6><i className={text.icon}></i>{text.name}</h6>
                            </Link>
                        ))}
                        <Link to="/logout">
                            <h6 className="logout" onClick={this.handleLogout}><i className="fas fa-sign-out-alt"></i>Logout</h6>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Drawer;