import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  Link
} from "react-router-dom";

import NavBar from "./components/layout/NavBar";

import AddTask from "./components/AddTask";
import Task from "./components/Task";
import TasksList from "./components/TasksList";

import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";


const Routes = (props) => (
    <Router {...props}  basename={'/my-react'}>
        <NavBar />
        <div className="container mt-3">
            <Switch>

                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

                <Route exact path={["/", "/tasks"]} component={TasksList} />
                <Route exact path="/tasks/add" component={AddTask} />
                <Route path="/tasks/:id" component={Task} />

                <Route exact path="/">
                    <Redirect to="/tasks" />
                </Route>

                <Route path="*" component={NotFound} />

            </Switch>
        </div>
  </Router>
);

export default Routes;