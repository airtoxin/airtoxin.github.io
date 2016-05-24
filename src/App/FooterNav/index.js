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
        justifyContent: "center",
    }
};

export default (props) => (
    <div style={{...styles.default}}>
        <div style={styles.container}>
            <section>nixotria</section>
        </div>
    </div>
);
