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

class Drawer extends React.Component {
    // state = {
    //     welcomeEmail: ""
    // }

    // loadProfileInfo = () => {
    //     axios.get('/api/user/me')
    //       .then(response => {
    //           
    //         this.setState({welcomeEmail: response.data.username})
    //       })
    //       .catch(err => 
    //     }    

    // componentDidMount() {
    //     this.loadProfileInfo()

    // }
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
    //     // 
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

        axios.get("/api/logout").then((response) => {
            this.props.auth()
            this.props.history.push("/");
            // window.location.pathname = "/"
        })
    }
    render() {
        return (
            <div>
                <div className="drawer-container">
                    <div className="navbar">
                        <i className="fas fa-bars toggle" onClick={() => this.handleToggle()}></i>

                        <div className="engauge-logo">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 46.04 74.94"
                                className="engauge-derrick">
                                <title>Asset 2</title>
                                <g id="derrick" data-name="derrick"><g id="derrick-group">
                                    <path className="derrick" d="M30.43,24.47h5s.21-.08.21-.19-.41-7.18-.41-7.35a.24.24,0,0,0-.25-.27H10.84c-.2,0-.29.08-.3.26s-.33,7.2-.33,7.33a.23.23,0,0,0,.2.22h5.35L0,73.75l.24.42a14.27,14.27,0,0,0,4.25.59,15.21,15.21,0,0,0,3.65-.34c.19-.63.47-1.52.66-2.15.35-1.17.71-2.31,1.06-3.49.18-.61.38-1.32.49-1.63,0-.12.07-.13.1-.13H35l.56,1.8c1.3,5,2.53,6,5.34,6.1A9.65,9.65,0,0,0,46,73.75Zm-7.61,1.14c.36,1.69,5.51,19.18,5.59,19.38s.09.37-.29.14-9.34-5.81-9.34-5.81c.61-2.22,3.28-11.81,3.64-13.71ZM12.91,58.89l3.6-11.78,15,9.1.63,2.9S14,58.89,12.91,58.89Z" /><path className="derrick" d="M25.87,4.66A4.12,4.12,0,0,0,22.41,0,4,4,0,0,0,18,3.65c-.27,2.27,1.31,3.56,2.46,4.52a5,5,0,0,1,1.8,2.13,9.38,9.38,0,0,0,.5,1.74.18.18,0,0,0,.2.1.16.16,0,0,0,.09-.07A11.4,11.4,0,0,0,25,8.5,14.77,14.77,0,0,0,25.87,4.66Z" /><path className="derrick" d="M17.31,9.16a2.77,2.77,0,0,0-3.77.14,2.57,2.57,0,0,0,.18,3.54,3,3,0,0,0,3,.39A5.38,5.38,0,0,1,18.13,13a2.28,2.28,0,0,1,.69.13,1.09,1.09,0,0,0,.38.11.13.13,0,0,0,.13-.08.15.15,0,0,0,0-.09,5,5,0,0,0-.75-2.4A4.77,4.77,0,0,0,17.31,9.16Z" /><path className="derrick" d="M29,9.1a2.78,2.78,0,0,1,3.77.26,2.57,2.57,0,0,1-.28,3.53,2.45,2.45,0,0,1-1.94.56c-.68-.08-1.28-.38-1.94-.52a3.86,3.86,0,0,0-1.55.13c-.07,0-.16,0-.19-.06a.19.19,0,0,1,0-.08,4.84,4.84,0,0,1,.81-2.39A5,5,0,0,1,29,9.1Z" /></g></g></svg>
                            <span>Engauge</span>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <div className="links">
                        {links.map((text, index) => (
                            <Link to={"/" + text.name.toLowerCase()} key={index}>
                                <h6><i className={text.icon}></i>{text.name}</h6>
                            </Link>
                        ))}
                        <div>
                            <h6 className="logout">
                                <i className="fas fa-sign-out-alt"></i>
                                <button className="loggingout" onClick={this.logoutButton}>Logout</button>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(Drawer);