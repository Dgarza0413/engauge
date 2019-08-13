import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
import DashBoard from "./pages/DashBoard";
import WellTable from "./pages/WellTable";
import WellReport from "./pages/WellReport";
import WellDetail from "./pages/WellDetail";
import NewWellForm from "./pages/NewWellForm";
import ProductionForm from "./pages/ProductionForm";
import W2 from "./pages/W2";
import Map from "./pages/Map";
import Login from "./pages/Login";
import Drawer from "./components/Drawer";
import WellProdForm from "./pages/WellProdForm";
import WellRecompForm from "./pages/WellRecompForm";
import Revenue from "./pages/Revenue";
import NoMatch from "./pages/NoMatch";
import axios from "axios";

class App extends React.Component {
    state = {
        loggedIn: false
    }
    styles = {
        layout: {
            display: "flex"
        }
    }

    componentDidMount() {
        axios.get("api/user/me").then((res)=>{
            console.log(res);
            this.setState({loggedIn:true})
        }).catch(()=>{
            this.setState({loggedIn:false})
        })
    }

    auth = () =>{
        this.setState({loggedIn:false})
    }
    
    defaultRoutes = () => {
        return (
            <div>
                <Route exact path="/dashboard" component={DashBoard} />
                <Route exact path="/map" component={Map} />
                <Route exact path="/reports" component={WellReport} />
                <Route exact path="/welltable" component={WellTable} />
                <Route exact path="/welltable/:id" component={WellDetail} />
                <Route exact path="/welltable/:id/recomp/new" component={WellRecompForm} />
                <Route exact path="/welltable/:id/prod/new" component={ProductionForm} />
                <Route exact path="/new-well" component={NewWellForm} />
                <Route exact path="/logout" component={Login} />
                {/* <Route exact path="/welltable/:id/prod/new" component={WellProdForm} /> */}
                {/* <Route exact path="/w2" component={W2} /> */}
                {/* <Route exact path="/production-form" component={ProductionForm} /> */}
                {/* <Route exact path="/formtest" component={FormTest} /> */}
                {/* <Route component={NoMatch} /> */}
                <Route exact path="/revenue" component={Revenue} />
            </div>
        );
    }    
    render() {
        return (
            <Router>
                <div>
                    { this.state.loggedIn ? <Drawer auth={this.auth}/> : false }   
                    <Switch>
                        { this.state.loggedIn ?
                        <div>
                            <Route exact path="/" component={DashBoard} />
                            <Route component={this.defaultRoutes} />
                        </div>
                        : <div>
                            <Route exact path="/" component={Login} />
                            <Route component={NoMatch} />
                            {/* <Route component={Login} /> */}
                        </div> }
                    </Switch>
                </div>
            </Router >
        );
    }
}
export default App;


