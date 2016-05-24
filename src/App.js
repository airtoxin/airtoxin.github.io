import React from "react";
import YouTube from "react-youtube"

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
            <div style={{position: "fixed", width: "100%", height: "100%"}}>
                <div id="overlay"/>
                <YouTube videoId="IadsLclBOS8" opts={opts}/>
            </div>
        );
    }

    handleOnReady(event) {
        event.target.setVolume(0);
    }
}
