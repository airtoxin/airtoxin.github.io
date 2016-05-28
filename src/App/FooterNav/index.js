import React from "react";
import Separator from "./Separator";
import Link from "../../shared/Link";

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
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    },
    item: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    separator: {
        flexShrink: 0
    }
};

export default (props) => (
    <div style={{...styles.default}}>
        <div style={styles.container}>
            <Link to="github"><div style={styles.item}><i className="fa fa-github" aria-hidden="true"></i></div></Link>
            <Separator style={styles.separator}/>
            <Link to="twitter"><div style={styles.item}><i className="fa fa-twitter" aria-hidden="true"></i></div></Link>
            <Separator style={styles.separator}/>
            <Link to="soundcloud"><div style={styles.item}><i className="fa fa-soundcloud" aria-hidden="true"></i></div></Link>
            <Separator style={styles.separator}/>
            <Link to="slideshare"><div style={styles.item}><i className="fa fa-slideshare" aria-hidden="true"></i></div></Link>
            <Separator style={styles.separator}/>
            <Link to="instagram"><div style={styles.item}><i className="fa fa-instagram" aria-hidden="true"></i></div></Link>
        </div>
    </div>
);
