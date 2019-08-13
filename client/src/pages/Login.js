import React from 'react';
import axios from 'axios'
import { Redirect } from "react-router-dom";
import { EmailInput, PasswordInput } from "../components/Form";   
import Button from "../components/Button";
import Background from "../images/login-background.jpg";

const leftPanel = {
    background: "url(" + Background + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "45%"
}

const rightPanel = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "55%"
}

const contentStyle = {
    margin: "auto",
    padding: "0 60px",
    width: "450px",
    boxSizing: "content-box"
}

const containerStyle = {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    flex: "1",
    height: "100vh",
    padding: "0"
}

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        welcomeEmail: "",
        redirectTo: null
    }

    handleInput = event => {
        console.log(event.target.value);
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

  
    handleFormSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state;
        console.log(this.state);
        axios.post("/api/login", {email, password})
            .then(result => {
                console.log(result.data)
                // this.setState({ redirectTo: "/dashboard" })
                window.location.pathname = "/dashboard"
            });
    }

    // handleFormLogout = event => {
    //     event.preventDefault();
    //     axios.get("/api/logout")
    //         .then(result => {
    //             console.log(result.data)
    //             this.setState({ welcomeEmail: ""});
    //     });
    // }

    loadProfileInfo = () => {
        axios.get('/api/user/me')
            .then(response => {
                this.setState({welcomeEmail: response.data.email})
            }).catch(err => {
                axios.get("/api/google/url").then(response => {
                    this.setState({googleSigninUrl: response.data.url})
                });
            });
    }

    // componentDidMount() {
    //     // Mostly just for developing locally
    //     if (window.location.pathname === "/api/google/callback") {
    //         const searchParams = new URLSearchParams(window.location.search);
    //         axios.post("/api/google/code", {code: searchParams.get('code')}).then(() => {
    //             window.location.href = "/"
    //         });
    //     } else {
    //         this.loadProfileInfo();
    //     }
    // }

    handleRedirect = () => {
        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectTo} />
        }
    }

    render() {
        return (
            <div className="container-fluid" style={containerStyle}>
                <div className="left-panel image-panel" style={leftPanel}></div>
                <div style={rightPanel}>
                    <div style={contentStyle}>
                            <h1 style={{ textAlign: "center"}}>Welcome to Engauge</h1>
                            <p style={{ textAlign: "center", fontSize: 20}}>Sign in to monitor your well and production status.</p>
                        <form onSubmit={this.handleFormSubmit}>
                            <EmailInput name="email" label="Email" placeholder="Enter Your Email" onChange={this.handleInput} value={this.state.email} />
                            <PasswordInput name="password" label="Password" placeholder="Enter Your Password" onChange={this.handleInput} value={this.state.password} />
                            <Button type="submit" value="Sign In" width="100%" />
                        </form>
                        {this.handleRedirect()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;