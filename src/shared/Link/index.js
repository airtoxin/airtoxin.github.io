import React from "react";
import {branch} from "baobab-react/higher-order";
import {setPage} from "../../actions";

export const Link = (props) => <div onClick={() => props.dispatch(setPage, props.to)}>{props.children}</div>;

export default branch({}, Link);
