import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
// import DashBoard from "./pages/DashBoard";
import DashBoard from "./pages/DashBoard";
import Report from "./pages/Report";
import WellTable from "./pages/WellTable";
import WellDetail from "./pages/WellDetail";
import Map from "./pages/Map";
import Login from "./pages/Login";
import Facility from "./pages/Facility";
import Revenue from "./pages/Revenue";
import Submit from './pages/submit';
// import Production from "./pages/Production";

// components
import WellRecompForm from "./components/Form/WellRecompForm";
import Recompletion from './components/Form/Recompletion';
// import NewWellForm from "./components/Form/NewWellForm";
import WellForm from "./components/Form/WellForm";
import ReportForm from './components/Form/ReportForm';
import ProdForm from './components/Form/ProdForm';
import Drawer from "./components/Drawer";
// import SecondaryDrawer from "./components/Drawer/Drawer";
// import Drawer from './components/Drawer/Drawer';
// import WellProdForm from "./pages/WellProdForm";
// import NoMatch from "./pages/NoMatch";

// const App = () => {
// const [loggedIn, setLoggedIn] = useState(false)
// const [data, setData] = useState()

// const auth = () => {
//     setLoggedIn(false)
// }

// useEffect(() => {
//     axios.get("api/user/me").then((res) => {
//        setLoggedIn(true)
//     }).catch(() => {
//         setLoggedIn(false)
//     })
//     axios.get("api/well-data").then(res => {
//        setData(res.data)
//     })
// }, [])
// }

class App extends React.Component {
    state = {
        // loggedIn: true
        loggedIn: false,
        wellData: []
    }
    styles = {
        layout: {
            display: "flex"
        }
    }

    // componentDidMount() {
    //     axios.get("api/user/me").then((res) => {
    //         // console.log(res);
    //         this.setState({ loggedIn: true })
    //     }).catch(() => {
    //         this.setState({ loggedIn: false })
    //     })
    //     axios.get("api/well-data").then(res => {
    //         this.setState({ wellData: res.data })
    //         // console.log(this.state.wellData)
    //     })
    // }

    auth = () => {
        this.setState({ loggedIn: false })
    }

    defaultRoutes = () => {
        return (
            <>
                <Route exact path="/dashboard" component={DashBoard} />
                <Route exact path="/map" component={Map} />
                <Route exact path="/reports" component={Report} />
                <Route exact path="/facilities" component={Facility} />
                <Route exact path="/revenue" component={Revenue} />
                <Route exact path="/well" component={WellTable} />
                <Route exact path="/well/:id" component={WellDetail} />
                <Route exact path={[
                    "/submit/:schema/:operation",
                    "/submit/:schema/:operation/:id",
                    "/submit/:schema/:operation/:id/:unique"]} component={Submit} />
                <Route exact path="/logout" component={Login} />
            </>
        );
    }
    render() {
        return (
            <Router>
                {/* <div> */}
                {/* <SecondaryDrawer /> */}
                <Drawer auth={this.auth} />
                <Switch>
                    <Route exact path="/" component={DashBoard} />
                    <Route component={this.defaultRoutes} />
                </Switch>

                {/* for sign in authentication */}
                {/* {
                        this.state.loggedIn
                            ? <Drawer auth={this.auth} />
                            : false
                    }
                    <Switch>
                        {
                            this.state.loggedIn
                                ? <Route exact path="/" component={DashBoard} />
                                : <Route exact path="/" component={Login} />
                        }
                        {
                            this.state.loggedIn
                                ? <Route component={this.defaultRoutes} />
                                : <Route component={NoMatch} />
                        }
                    </Switch> */}
                {/* </div> */}
            </Router >
        );
    }
}
export default App;


