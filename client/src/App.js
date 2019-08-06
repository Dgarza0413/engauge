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
            <Route exact path="/welltable/id" component={WellDetail} />
            <Route exact path="/newwell" component={NewWellForm} />
          </Container>
          <Route component={NoMatch} />

        </Switch>
      </div>
    </Router >
  );
}

export default App;
