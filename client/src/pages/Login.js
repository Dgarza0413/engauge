import React from 'react';
import axios from 'axios'
import PageWrapper from "../components/PageWrapper";
import { Redirect } from "react-router-dom";
import { StringInput, EmailInput, PasswordInput } from "../components/Form";   
import Button from "../components/Button";


class Login extends React.Component {
  state = {
    email:"",
    password:"",
    welcomeEmail: "",
    googleSigninUrl: "",
    redirectTo: null
  }

  handleInput = event => {
    const {name,value} = event.target
    this.setState({
      [name]: value
    })
  }

  // let's try and login

  handleFormSubmit = event => {
    event.preventDefault()
    const {email,password} = this.state
    axios.post("/api/login", {email, password})
      .then(result => {
        console.log(result.data)
        this.setState({ redirectTo: "/dashboard" })
      })
  }
  handleFormLogout = event => {
    event.preventDefault()
    axios.get("/api/logout")
      .then(result => {
        console.log(result.data)
        this.setState({ welcomeEmail: ""})
      })
  }

  loadProfileInfo = () => {
    axios.get('/api/user/me')
      .then(response => {
        this.setState({welcomeEmail: response.data.email})
      })
      .catch(err => {
        axios.get("/api/google/url").then(response => {
          this.setState({googleSigninUrl: response.data.url})
        })
      })
  }

  componentDidMount(){
    // Mostly just for developing locally
    if(window.location.pathname === "/api/google/callback"){
      const searchParams = new URLSearchParams(window.location.search);
      axios.post("/api/google/code", {code: searchParams.get('code')}).then(() => {
        window.location.href = "/"
      })
    } else {
      this.loadProfileInfo()
    }
  }

  render(){
    if(this.state.redirectTo) {
        return <Redirect to={this.state.redirectTo} />
    }

    return (
        <PageWrapper>
      <div>
        <h1>{this.state.welcomeEmail.length > 0 
          ? "Welcome " + this.state.welcomeEmail
          : "Login"}</h1>
          {
            this.state.googleSigninUrl.length > 0 && this.state.welcomeEmail.length === 0
            ? (<h3>Sign in with <a href={this.state.googleSigninUrl} >google </a></h3>)
            : ""
          }
        <form>
          <input onChange={this.handleInput} name="email" value={this.state.email} type="text"/>
          <input onChange={this.handleInput} name="password" value={this.state.password} type="password"/>
          <button onClick={this.handleFormSubmit}>Login</button>
          {/* <button onClick={this.handleFormLogout}>Logout</button> */}
        </form>
      </div>
      </PageWrapper>
    );
  }
}

export default Login;