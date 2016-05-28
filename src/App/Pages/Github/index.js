import React from "react";
import {branch} from "baobab-react/higher-order";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {inspect} from "util";

const styles = {
    flex: {
        display: "flex"
    },
    flexItem: {
        flexFlow: "row wrap"
    }
};

export class Github extends React.Component {
    render() {
        return (
            <div style={styles.flex}>
                <pre style={styles.flexItem}>{inspect(this.props.me)}</pre>
                <div style={styles.flexItem}>
                    <Card>
                        <CardHeader avatar="https://avatars.githubusercontent.com/u/2460874?v=3"></CardHeader>
                    </Card>
                </div>
            </div>
        );
    }
}

export default branch({me: ["github", "me"]}, Github);
