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
        toggle: false,
        display: {
            left: "drawer-container slide-left",
            active: "menu nav-active",
            hide: "links hide"
        }
    }

    componentDidMount() {
        this.setState({ toggle: false });
        this.handleToggle();
    }

    handleToggle = () => {
        if (this.state.toggle === false) {
            this.setState({
                toggle: true,
                display: {
                    left: "drawer-container slide-left",
                    active: "menu nav-active",
                    hide: "links"
                }
            });
        } else {
            this.setState({
                toggle: false,
                display: {
                    left: "drawer-container",
                    active: "menu",
                    hide: "links hide"
                }
            });
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
                        <Link to="/">
                            <h6 className="logout" onClick={this.handleLogout}><i className="fas fa-sign-out-alt"></i>Logout</h6>
                        </Link>
                    </div>  
                </div>
            </div>
        );
    }
    logoutButton = () => {
        console.log("in logout button")
        axios.get("/api/logout").then(()=>{
            window.location.pathname = "/"
        })
    }
    render() {
        return (
            <div style={{overflow: "hidden"}}>
                <div className={this.state.display.left}>
                    <div className="navbar">
                        <i class="fas fa-bars toggle" onClick={() => this.handleToggle()}></i>
                        <h4>Engauge</h4>
                    </div>
                </div>
                <div className={this.state.display.active}>
                    <div className={this.state.display.hide}>
                        {links.map((text, index) => (
                            <Link to={"/" + text.name.toLowerCase()} key={index}>
                                <h6><i className={text.icon}></i>{text.name}</h6>
                            </Link>
                        ))}
                        <div>
                            <h6 className="logout"><i className="fas fa-sign-out-alt"></i><button className="loggingout"onClick={this.logoutButton}>Logout</button></h6>
                        </div>
                    </div>  
                </div>
            </div>

        );
    }
}

export default Drawer;