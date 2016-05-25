import React from "react";
import Separator from "./Separator";

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
            <a style={styles.item} href="https://github.com/airtoxin"><i className="fa fa-github" aria-hidden="true"></i></a>
            <Separator style={styles.separator}/>
            <a style={styles.item} href="https://twitter.com/airtoxin"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <Separator style={styles.separator}/>
            <a style={styles.item} href="https://soundcloud.com/airtoxin"><i className="fa fa-soundcloud" aria-hidden="true"></i></a>
            <Separator style={styles.separator}/>
            <a style={styles.item} href="http://www.slideshare.net/ryojiishii14"><i className="fa fa-slideshare" aria-hidden="true"></i></a>
            <Separator style={styles.separator}/>
            <a style={styles.item} href="https://www.instagram.com/airtoxin/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
    </div>
);
