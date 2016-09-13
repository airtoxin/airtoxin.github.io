import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { root } from "baobab-react/higher-order";
import App from "./pages/App";
import tree from "./tree";

const Rooted = root(tree, App);

render(<Rooted />, document.getElementById("app"));
