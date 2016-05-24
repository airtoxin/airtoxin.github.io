import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import {root} from 'baobab-react/higher-order';
import tree from "./state";

const RootedApp = root(tree, App);

ReactDom.render(
    <RootedApp/>,
    document.getElementById("app")
);
