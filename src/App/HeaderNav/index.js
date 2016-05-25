import React from "react";

const styles = {
    default: {
        position: "absolute",
        fontSize: "98px",
        width: "100%",
        top: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    }
};

export default (props) => (
    <div style={{...props.style, ...styles.default}}>
        <div style={styles.container}>
            <section>airtoxin</section>
        </div>
    </div>
);
