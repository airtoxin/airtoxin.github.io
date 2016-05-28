import React from "react";
import HeaderNav from "./HeaderNav";
import Pages from "./Pages";
import FooterNav from "./FooterNav";
import YouTube from "react-youtube"

const styles = {
    app: {
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        color: "#ababab",
        fontFamily: "'Arvo', serif"
    },
    contents: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    headerNav: {
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        /* http://www.transparenttextures.com/ */
        backgroundImage: `url("img/cross-stripes.png")`,
    }
};

export default class App extends React.Component {
    render() {
        const opts = {
            height: "100%",
            width: "100%",
            playerVars: {
                autoplay: 1,
                controls: 0,
                disablekb: 1,
                iv_load_policy: 3,
                loop: 1,
                modestbranding: 1,
                showinfo: 0
            }
        };

        return (
            <div style={styles.app}>
                <div style={styles.contents}>
                    <HeaderNav style={styles.headerNav}/>
                    <Pages/>
                    <FooterNav />
                </div>

                {/* background youtube */}
                <div style={styles.overlay}/>
                <YouTube videoId="IvjMgVS6kng" opts={opts}/>
            </div>
        );
    }

    handleOnReady(event) {
        event.target.setVolume(0);
    }
}
