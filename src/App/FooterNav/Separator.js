import React from "react";

const baseStyle = {
    width: "5px",
    background: "#717171"
};

export default ({style={}}) => (
    <div style={{...baseStyle, ...style}}></div>
);
