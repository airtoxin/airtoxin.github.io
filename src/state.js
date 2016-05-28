import Baobab from 'baobab';

const tree = new Baobab({
    page: "home"
}, {
    page(v) {
        return ["home", "github", "twitter", "soundcloud", "slideshare", "instagram"].includes(v);
    }
});

export default tree;
