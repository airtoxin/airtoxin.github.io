import React from "react";

const styles = (props) => {
    return {
        default: {
            position: "absolute",
            fontSize: "100px",
            ...props.style
        }
    };
};

export default (props) => (
    <nav className="nav" style={styles(props).default}>
        <div className="nav-left">
            <section className="nav-item">airtoxin</section>
        </div>
        <div className="nav-center">
            <a className="nav-item" href="#">
                <span className="icon">
                    <i className="fa fa-github"></i>
                </span>
            </a>
            <a className="nav-item" href="#">
                <span className="icon">
                    <i className="fa fa-twitter"></i>
                </span>
            </a>
        </div>
    </nav>
);
