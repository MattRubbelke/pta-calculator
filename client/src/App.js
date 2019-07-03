import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PatentApp from "./pages/patentApps"
import addPatent from "./pages/addPatentApp"
import Nav from "./components/Nav/index"
import Detail from "./pages/Detail"
import './App.css';
import signIn from './pages/signIn';
import addUser from "./pages/addUser"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/login" component={signIn} />
          <Route exact path="/addUser" component={addUser}/>
          <Route exact path="/" component={PatentApp} />
          <Route exact path="/add" component={addPatent} />
          <Route exact path="/add/:id" component={addPatent} />
          <Route exact path="/apps/:id" component={Detail} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

