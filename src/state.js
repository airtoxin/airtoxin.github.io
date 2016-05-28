import Baobab from 'baobab';
import r from "request";

const tree = new Baobab({
    page: "home",
    github: {
        me: {},
        items: []
    },
    twitter: {
        me: {},
        items: []
    },
    soundcloud: {
        me: {},
        items: []
    },
    slideshare: {},
    instagram: {
        me: {},
        items: []
    }
}, {
    page(v) {
        return ["home", "github", "twitter", "soundcloud", "slideshare", "instagram"].includes(v);
    }
});

const endpoints = [
    ["github.me", "https://api.github.com/users/airtoxin"]
];

for (const [treePath, ep] of endpoints) {
    r(ep, (error, response, body) => {
        const parsed = JSON.parse(body);
        if (!error && parsed) tree.set(treePath.split("."), parsed);
    });
}

export default tree;
