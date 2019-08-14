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
    //     name: "Reports",
    //     icon: "fas fa-file-signature",
    // }, {
        name: "WellTable",
        icon: "fas fa-fill",
    }, {
        name: "Map",
        icon: "fas fa-map-marked-alt",
    }
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
        
        axios.get("/api/logout").then((response)=>{
            
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
                        {/* <h4>Engauge</h4> */}
                        <div class="engauge-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.04 74.94" className="engauge-derrick"><title>Asset 2</title><g id="derrick" data-name="derrick"><g id="derrick-group"><path className="derrick" d="M30.43,24.47h5s.21-.08.21-.19-.41-7.18-.41-7.35a.24.24,0,0,0-.25-.27H10.84c-.2,0-.29.08-.3.26s-.33,7.2-.33,7.33a.23.23,0,0,0,.2.22h5.35L0,73.75l.24.42a14.27,14.27,0,0,0,4.25.59,15.21,15.21,0,0,0,3.65-.34c.19-.63.47-1.52.66-2.15.35-1.17.71-2.31,1.06-3.49.18-.61.38-1.32.49-1.63,0-.12.07-.13.1-.13H35l.56,1.8c1.3,5,2.53,6,5.34,6.1A9.65,9.65,0,0,0,46,73.75Zm-7.61,1.14c.36,1.69,5.51,19.18,5.59,19.38s.09.37-.29.14-9.34-5.81-9.34-5.81c.61-2.22,3.28-11.81,3.64-13.71ZM12.91,58.89l3.6-11.78,15,9.1.63,2.9S14,58.89,12.91,58.89Z"/><path className="derrick" d="M25.87,4.66A4.12,4.12,0,0,0,22.41,0,4,4,0,0,0,18,3.65c-.27,2.27,1.31,3.56,2.46,4.52a5,5,0,0,1,1.8,2.13,9.38,9.38,0,0,0,.5,1.74.18.18,0,0,0,.2.1.16.16,0,0,0,.09-.07A11.4,11.4,0,0,0,25,8.5,14.77,14.77,0,0,0,25.87,4.66Z"/><path className="derrick" d="M17.31,9.16a2.77,2.77,0,0,0-3.77.14,2.57,2.57,0,0,0,.18,3.54,3,3,0,0,0,3,.39A5.38,5.38,0,0,1,18.13,13a2.28,2.28,0,0,1,.69.13,1.09,1.09,0,0,0,.38.11.13.13,0,0,0,.13-.08.15.15,0,0,0,0-.09,5,5,0,0,0-.75-2.4A4.77,4.77,0,0,0,17.31,9.16Z"/><path className="derrick" d="M29,9.1a2.78,2.78,0,0,1,3.77.26,2.57,2.57,0,0,1-.28,3.53,2.45,2.45,0,0,1-1.94.56c-.68-.08-1.28-.38-1.94-.52a3.86,3.86,0,0,0-1.55.13c-.07,0-.16,0-.19-.06a.19.19,0,0,1,0-.08,4.84,4.84,0,0,1,.81-2.39A5,5,0,0,1,29,9.1Z"/></g></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304.68 53.18" className="engauge-text"><title>Asset 4</title><g id="logo-text" data-name="logo-text"><g id="logo-text-group" data-name="Layer 1"><path className="logo-text" d="M32,48.53c-.46,2.55-2.25,3.75-5.11,3.75H4.58c-2.85,0-4.58-1.87-4.58-5V1.43L.53,1H30.68a16,16,0,0,1,.23,3.15,11.3,11.3,0,0,1-.61,3.6H12.53c-1.13,0-3,.07-4.73,0,0,1.95.08,2.92.08,4.87V23.1c1.72,0,3.52-.07,4.65-.07h14.1a13.09,13.09,0,0,1,.37,3.3,13.09,13.09,0,0,1-.37,3.3H12.53c-1.13,0-2.93,0-4.65-.08V41.86c0,1.35-.08,2.4-.08,3.82a48,48,0,0,1,5-.22H32.18A16.31,16.31,0,0,1,32,48.53Z"/><path className="logo-text" d="M76.79,1.05V52.13a37.67,37.67,0,0,1-4.8.38,41.85,41.85,0,0,1-4.8-.3l-16-31.43c-1.8-3.75-3.38-7.28-4.73-10.43l-.3.08c.3,5.17.68,12.75.68,18.37V52.21a23.15,23.15,0,0,1-7.43,0V1.05A38.24,38.24,0,0,1,44.16.68,39,39,0,0,1,49,1L64.79,32.41c1.87,3.9,3.52,7.8,4.95,10.87l.3-.07c-.38-6-.6-13.73-.6-18.91V5.63c0-3.53,1-4.95,4.27-4.95h2.63Z"/><path className="logo-text" d="M119.47,25.2c4.2,0,5.7,1.95,5.7,5.26V50a53.53,53.53,0,0,1-18.53,3.22c-15.52,0-21.3-12.22-21.3-26.25C85.34,7.88,96.52,0,107.54,0A30.05,30.05,0,0,1,125,5.48a9.69,9.69,0,0,1-3.82,6,22.73,22.73,0,0,0-13.66-4.65c-7.65,0-13.87,5.4-13.87,20.17,0,13.13,5,19.58,14.32,19.58a33.29,33.29,0,0,0,9.53-1.27v-8.4c0-1.73,0-3.3.15-4.8h-6.6c-2.55,0-3.75-1-3.75-3.53a10.05,10.05,0,0,1,.6-3.3Z"/><path className="logo-text" d="M142.08,39.76l-4,12.52a16.06,16.06,0,0,1-3.45.3,14.91,14.91,0,0,1-3.9-.52l-.22-.38L147.48,1a29.91,29.91,0,0,1,4.57-.3,28.47,28.47,0,0,1,4.51.3l16.8,50.7a8.92,8.92,0,0,1-4.65,1c-2.48,0-3.75-.9-4.73-4.2l-2.77-8.77c-1.28,0-3.9.07-4.5.07H146.43C145.83,39.83,143.35,39.76,142.08,39.76Zm2-6.45c1.2,0,3.23-.08,3.83-.08h7.5c.53,0,2.55.08,3.75.08l-3.45-10.88c-1.35-4.35-2.92-9.6-4-13.58h-.37c-.75,3.38-2.1,8.1-2.93,10.88Z"/><path className="logo-text" d="M215.14,34.21c0,12.45-7.5,19-19,19s-18.9-6.52-18.9-19V1.13l.45-.45h3.07c3.23,0,4.43,1.57,4.43,5.1V34.21c0,8.25,3.82,12.52,10.95,12.52s11-4.27,11-12.52V1a22.28,22.28,0,0,1,3.9-.3,25,25,0,0,1,4.13.3Z"/><path className="logo-text" d="M257.21,25.2c4.2,0,5.7,1.95,5.7,5.26V50a53.52,53.52,0,0,1-18.52,3.22c-15.53,0-21.31-12.22-21.31-26.25,0-19,11.18-26.93,22.21-26.93a30,30,0,0,1,17.47,5.48,9.69,9.69,0,0,1-3.82,6,22.7,22.7,0,0,0-13.65-4.65c-7.66,0-13.88,5.4-13.88,20.17,0,13.13,5,19.58,14.33,19.58a33.22,33.22,0,0,0,9.52-1.27v-8.4c0-1.73,0-3.3.15-4.8h-6.6c-2.55,0-3.75-1-3.75-3.53a10.32,10.32,0,0,1,.6-3.3Z"/><path className="logo-text" d="M304.45,48.53c-.45,2.55-2.25,3.75-5.1,3.75H277.08c-2.86,0-4.58-1.87-4.58-5V1.43L273,1h30.16a16.68,16.68,0,0,1,.22,3.15,11.26,11.26,0,0,1-.6,3.6H285c-1.13,0-3,.07-4.73,0,0,1.95.08,2.92.08,4.87V23.1c1.72,0,3.52-.07,4.65-.07h14.1a13.09,13.09,0,0,1,.37,3.3,13.09,13.09,0,0,1-.37,3.3H285c-1.13,0-2.93,0-4.65-.08V41.86c0,1.35-.08,2.4-.08,3.82a48,48,0,0,1,4.95-.22h19.43A15.61,15.61,0,0,1,304.45,48.53Z"/></g></g></svg>
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
                            <h6 className="logout"><i className="fas fa-sign-out-alt"></i><button className="loggingout"onClick={this.logoutButton}>Logout</button></h6>
                        </div>
                    </div>  
                </div>
            </div>

        );
    }
}

export default withRouter(Drawer);