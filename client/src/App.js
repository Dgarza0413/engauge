import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import DashBoard from "./pages/DashBoard";
import WellTable from "./pages/WellTable";
import WellReport from "./pages/WellReport";
import WellDetail from "./pages/WellDetail";
import WellProdForm from "./pages/WellProdForm";
import NewWellForm from "./pages/NewWellForm";
import W2 from "./pages/W2";
import FormTest from "./pages/FormTest"
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
            {/* <Route exact path="/" component={Books} /> */}
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/reports" component={WellReport} />
            <Route exact path="/books/:id" component={Detail} />
            <Route exact path="/welltable" component={WellTable} />
            <Route exact path="/welltable/id" component={WellDetail} />
            <Route exact path="/welltable/id/prod" component={WellProdForm} />
            <Route exact path="/new-well" component={NewWellForm} />
            <Route exact path="/w2" component={W2} />
            <Route exact path="/newwell" component={NewWellForm} />
            <Route exact path="/formtest" component={FormTest} />
          </Container>
          <Route component={NoMatch} />

        </Switch>
      </div>
    </Router >
  );
}

export default App;
