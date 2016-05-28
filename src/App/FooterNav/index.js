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

export default class FooterNav extends React.Component {
    render() {
        return (
            <div style={{...styles.default}}>
                <div style={styles.container}>
                    <div style={styles.item}><Link to="github"><i className="fa fa-github" aria-hidden="true"></i></Link></div>
                    <Separator style={styles.separator}/>
                    <div style={styles.item}><Link to="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></Link></div>
                    <Separator style={styles.separator}/>
                    <div style={styles.item}><Link to="soundcloud"><i className="fa fa-soundcloud" aria-hidden="true"></i></Link></div>
                    <Separator style={styles.separator}/>
                    <div style={styles.item}><Link to="slideshare"><i className="fa fa-slideshare" aria-hidden="true"></i></Link></div>
                    <Separator style={styles.separator}/>
                    <div style={styles.item}><Link to="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></Link></div>
                </div>
            </div>
        );
    }
}
