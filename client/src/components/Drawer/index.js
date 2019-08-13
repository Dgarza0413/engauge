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
    state = {
        toggle: false
    }

    componentDidMount() {
        this.setState({ toggle: false });
        console.log(this.state.toggle);
        this.handleToggle();
    }

    handleToggle = () => {
        if (this.state.toggle === false) {
            this.setState({ toggle: true });
        } else {
            console.log("closed");
            this.setState({ toggle: false });
        }
    }

    displayOpen = () => {
        return (
            <div>
                <div className="drawer-container slide-left">
                    <i class="fas fa-bars toggle" onClick={() => this.handleToggle()}></i>
                    <div className="navbar">
                        <h4>Engauge</h4>
                    </div>
                </div>
                <div className="menu nav-active">
                    <div className="links">
                        {links.map((text, index) => (
                            <Link to={"/" + text.name.toLowerCase()} key={index}>
                                <h6><i className={text.icon}></i>{text.name}</h6>
                            </Link>
                        ))}
                        <Link to="/logout">
                            <h6 className="logout"><i className="fas fa-sign-out-alt"></i>Logout</h6>
                        </Link>
                    </div>  
                </div>
            </div>
        );
    }

    displayClosed = () => {
        return (
            <div>
                <div className="drawer-container">
                    <i class="fas fa-bars toggle" onClick={() => this.handleToggle()}></i>
                    <div className="navbar">
                        <h4>Engauge</h4>
                    </div>
                </div>
                <div className="menu">
                    <div className="links hide">
                        {links.map((text, index) => (
                            <Link to={"/" + text.name.toLowerCase()} key={index}>
                                <h6><i className={text.icon}></i>{text.name}</h6>
                            </Link>
                        ))}
                        <Link to="/logout">
                            <h6 className="logout"><i className="fas fa-sign-out-alt"></i>Logout</h6>
                        </Link>
                    </div>  
                </div>
            </div>
        );
    }

    render() {
        return (
                // (this.state.toggle === false) ? this.displayOpen() : this.displayClosed()  
            <div>
                <div className="drawer-container">
                    <i class="fas fa-bars toggle" onClick={() => this.handleToggle()}></i>
                    <div className="navbar">
                        <h4>Engauge</h4>
                    </div>
                </div>
                <div className="menu">
                    <div className="links">
                        {links.map((text, index) => (
                            <Link to={"/" + text.name.toLowerCase()} key={index}>
                                <h6><i className={text.icon}></i>{text.name}</h6>
                            </Link>
                        ))}
                        <Link to="/logout">
                            <h6 className="logout"><i className="fas fa-sign-out-alt"></i>Logout</h6>
                        </Link>
                    </div>  
                </div>
            </div>

        );
    }
}

export default Drawer;