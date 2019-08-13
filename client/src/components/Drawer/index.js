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
    // state = {
    //     toggle: false,
    //     width: window.innerWidth,
    //     display: {
    //         left: "drawer-container slide-left",
    //         active: "menu nav-active",
    //         hide: "links"
    //     }
    // }

    // componentDidMount() {
    //     this.setState({ toggle: true });
    //     this.checkSize();
    //     // this.handleToggle();
    //     // console.log($(window).width());
    // }

    // handleToggle = () => {
    //     if (this.state.toggle === false) {
    //         this.setState({
    //             toggle: true,
    //             display: {
    //                 left: "drawer-container slide-left",
    //                 active: "menu nav-active",
    //                 hide: "links"
    //             }
    //         });
    //     } else {
    //         this.setState({
    //             toggle: false,
    //             display: {
    //                 left: "drawer-container",
    //                 active: "menu",
    //                 hide: "links hide"
    //             }
    //         });
    //     }
    // }

    // checkWidth = () => {
    //     this.setState({ width: window.innerWidth });
    // }

    // checkSize = () => {
    //     if (this.state.width < 800) {
    //         this.handleToggle();
    //     } else {
    //         this.setState({
    //             toggle: true,
    //             display: {
    //                 left: "drawer-container slide-left",
    //                 active: "menu nav-active",
    //                 hide: "links"
    //             }
    //         });
    //     }
    // }

    render() {
        return (
            <div>
                <div className="drawer-container">
                    <div className="navbar">
                        <i className="fas fa-bars toggle" onClick={() => this.handleToggle()}></i>
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