import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../App"
import Details from "./MoviePage/components/Details";

export default function Routes(){
    <Switch>
        <Route exact path="/" Component={App}/>
        <Route path="/Details" Component={Details}/>
    </Switch>
}