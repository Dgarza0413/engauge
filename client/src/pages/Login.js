import React from 'react';
import axios from 'axios'
import { Redirect } from "react-router-dom";
import { StringInput, EmailInput, PasswordInput } from "../components/Form";   
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
        googleSigninUrl: "",
        redirectTo: null
    }

    handleInput = event => {
        console.log(event.target.value);
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    // let's try and login
    handleFormSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state;
        console.log(this.state);
        axios.post("/api/login", {email, password})
            .then(result => {
                console.log(result.data)
                this.setState({ redirectTo: "/dashboard" })
            });
    }

    handleFormLogout = event => {
        event.preventDefault();
        axios.get("/api/logout")
            .then(result => {
                console.log(result.data)
                this.setState({ welcomeEmail: ""});
        });
    }

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

    componentDidMount() {
        // Mostly just for developing locally
        if (window.location.pathname === "/api/google/callback") {
            const searchParams = new URLSearchParams(window.location.search);
            axios.post("/api/google/code", {code: searchParams.get('code')}).then(() => {
                window.location.href = "/"
            });
        } else {
            this.loadProfileInfo();
        }
    }

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
                        {/* <h1>{this.state.welcomeEmail.length > 0 
                        ? "Welcome " + this.state.welcomeEmail
                        : "Login"}</h1> */}
                            <h1 style={{ textAlign: "center"}}>Welcome to Engauge</h1>
                            <p style={{ textAlign: "center", fontSize: 20}}>Sign in to monitor your well and production status.</p>
                        {/* {
                        this.state.googleSigninUrl.length > 0 && this.state.welcomeEmail.length === 0
                        ? (<h3>Sign in with <a href={this.state.googleSigninUrl} >google </a></h3>)
                        : ""
                        } */}
                        <form onSubmit={this.handleFormSubmit}>
                            {/* <StringInput 
                            label="Full Name" placeholder="Enter Your Name" />  */}
                            <EmailInput name="email" label="Email" placeholder="Enter Your Email" onChange={this.handleInput} value={this.state.email} />
                            <PasswordInput name="password" label="Password" placeholder="Enter Your Password" onChange={this.handleInput} value={this.state.password} />
                            <Button type="submit" value="Sign In" width="100%" />
                        </form>
                        {/* <form>
                        <input onChange={this.handleInput} name="email" value={this.state.email} type="text"/>
                        <input onChange={this.handleInput} name="password" value={this.state.password} type="password"/>
                        <button onClick={this.handleFormSubmit}>Login</button> */}
                        {/* <button onClick={this.handleFormLogout}>Logout</button> */}
                        {/* </form> */}
                        {this.handleRedirect()}
                        <h3>Sign in with <a href={this.state.googleSigninUrl} >google </a></h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;