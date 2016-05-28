import React from "react";
import {branch} from "baobab-react/higher-order";
import {inspect} from "util";

const styles = {
    flex: {
        display: "flex"
    },
    flexItem: {
        flexFlow: "row wrap"
    }
};

export class Twitter extends React.Component {
    render() {
        return (
            <div style={styles.flex}>
                <pre style={styles.flexItem}>{inspect(this.props.me)}</pre>
                <div style={styles.flexItem}>yo!</div>
            </div>
        );
    }
}

export default branch({me: ["twitter", "me"]}, Twitter);
