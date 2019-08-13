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
<<<<<<< HEAD
    state = {
        toggle: false,
        welcomeEmail: "",
        display: {
            left: "drawer-container slide-left",
            active: "menu nav-active",
            hide: "links hide"
        }
    }

    loadProfileInfo = () => {
        axios.get('/api/user/me')
          .then(response => {
              console.log(response.data.username);
            this.setState({welcomeEmail: response.data.username})
          })
          .catch(err => console.log(err))
        }    

    componentDidMount() {
        this.loadProfileInfo()
        this.setState({ toggle: false });
        this.handleToggle();
    }
=======
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
>>>>>>> master

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
                        <h1>{this.state.welcomeEmail.length > 0
                    ? this.state.welcomeEmail
                    : ""} </h1>
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
        axios.get("/api/logout").then((response)=>{
            console.log(response);
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