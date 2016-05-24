import React from "react";

const styles = {
    default: {
        position: "absolute",
        fontSize: "98px",
        width: "100%",
        bottom: 0
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    }
};

export default (props) => (
    <div style={{...styles.default}}>
        <div style={styles.container}>
            <section><i className="fa fa-github" aria-hidden="true"></i></section>
            <section><i className="fa fa-twitter" aria-hidden="true"></i></section>
            <section><i className="fa fa-soundcloud" aria-hidden="true"></i></section>
            <section><i className="fa fa-slideshare" aria-hidden="true"></i></section>
            <section><i className="fa fa-instagram" aria-hidden="true"></i></section>
        </div>
    </div>
);
