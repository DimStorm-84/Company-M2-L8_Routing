import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import UsersTab from "./layouts/usersTab";
import UserCard from "./components/userCard";

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />{" "}
                <Route path="/main" exact component={Main} />{" "}
                <Route path="/login" component={Login} />
                <Route path="/users" exact component={UsersTab} />
                <Route path="/users/:userId" component={UserCard} />
            </Switch>
        </div>
    );
};

export default App;
