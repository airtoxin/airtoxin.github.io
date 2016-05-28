import React from "react";
import {branch} from "baobab-react/higher-order";
import Home from "./Home";
import Github from "./Github";
import Twitter from "./Twitter";
import Soundcloud from "./Soundcloud";
import Slideshare from "./Slideshare";
import Instagram from "./Instagram";

export const Pages = (props) => {
    switch (props.page) {
        case "home":
            return <Home/>;
        case "github":
            return <Github/>;
        case "twitter":
            return <Twitter/>;
        case "soundcloud":
            return <Soundcloud/>;
        case "slideshare":
            return <Slideshare/>;
        case "instagram":
            return <Instagram/>;
        default:
            return null;
    }
};

export default branch({
    page: ["page"]
}, Pages);
