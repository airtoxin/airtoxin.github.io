import React from "react";
import {branch} from "baobab-react/higher-order";
import Home from "./Home";
import Github from "./Github";

export const Pages = (props) => {
    switch (props.page) {
        case "home":
            return <Home/>;
        case "github":
            return <Github/>;
        default:
            return null;
    }
};

export default branch({
    page: ["page"]
}, Pages);
