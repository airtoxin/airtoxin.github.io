import React from "react";
import Link from "../../shared/Link";

const styles = {
    default: {
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
        <Link to="home">
            <div style={styles.container}>
                <section>airtoxin</section>
            </div>
        </Link>
    </div>
);
