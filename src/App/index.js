import React from "react";
import HeaderNav from "./HeaderNav";
import FooterNav from "./FooterNav";
import YouTube from "react-youtube"

const styles = {
    app: {
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        color: "white",
        fontFamily: "'Arvo', serif"
    },
    headerNav: {
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
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
                <div style={styles.overlay}/>
                <HeaderNav style={styles.headerNav}/>
                <YouTube videoId="Ftm2uv7-Ybw" opts={opts}/>
                <FooterNav />
            </div>
        );
    }

    handleOnReady(event) {
        event.target.setVolume(0);
    }
}
