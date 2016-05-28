import React from "react";
import ReactDom from "react-dom";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from "./App";
import {root} from 'baobab-react/higher-order';
import tree from "./state";

const MaterializedApp = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}><App/></MuiThemeProvider>
);

const RootedApp = root(tree, MaterializedApp);

ReactDom.render(
    <RootedApp/>,
    document.getElementById("app")
);
