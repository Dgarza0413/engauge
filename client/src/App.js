import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import DashBoard from "./pages/DashBoard";
import WellTable from "./pages/WellTable";
import WellReport from "./pages/WellReport";
import WellDetail from "./pages/WellDetail";
import NewWellForm from "./pages/NewWellForm";
import Map from "./pages/Map";
import Drawer from "./components/Drawer";
import Container from "@material-ui/core/Container";
import axios from 'axios'
class App extends React.Component {
  state = {
    email:'test@test.com',
    password:'testtest',
    welcomeEmail: "",
    googleSigninUrl: ""
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
        this.loadProfileInfo()
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
    return (
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
          <input onChange={this.handleInput} name="password" value={this.state.email} type="password"/>
          <button onClick={this.handleFormSubmit}>Login</button>
          <button onClick={this.handleFormLogout}>Logout</button>
        </form>
      </div>
    );
  }
}

function App() {
  const styles = {
    layout: {
      display: "flex"
    }
  }

  return (
    <Router>
      <div style={styles.layout}>
        <Drawer />
        <Switch>
          <Container>
            <Route exact path="/" component={Books} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/reports" component={WellReport} />
            <Route exact path="/books/:id" component={Detail} />
            <Route exact path="/welltable" component={WellTable} />
            <Route exact path="/welltable/:id" component={WellDetail} />
            <Route exact path="/newwell" component={NewWellForm} />
          </Container>
          <Route component={NoMatch} />

        </Switch>
      </div>
    </Router >
  );
}

export default App;
