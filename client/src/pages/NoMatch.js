import React from "react";
import Background from "../images/404-image.jpg";
import Login from "../pages/Login"
import { Link } from 'react-router-dom';

const button = {
        border: "0",
        backgroundColor: "#d5b577",
        color: "white",
        fontWeight: "600",
        padding: "5px 25px",
        borderRadius: "3px",
        float: "right",
        outline: "none",
        width: "100%"
}

const leftPanel = {
    background: "url(" + Background + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "45%"
}

const rightPanel = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "55%"
}

const contentStyle = {
    margin: "auto",
    padding: "0 60px",
    width: "450px",
    boxSizing: "content-box"
}

const containerStyle = {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    flex: "1",
    height: "100vh",
    padding: "0"
}

function NoMatch() {
    return (
        <div className="container-fluid" style={containerStyle}>
            <div className="left-panel image-panel" style={leftPanel}></div>
            <div style={rightPanel}>
                <div style={contentStyle}>
                        <h1 style={{ textAlign: "center"}}>Page Not Found</h1>
                        <p style={{ textAlign: "center", fontSize: 20}}>Sorry, we're unable to find the page you're looking for.</p>
                  <Link to="/">
                   <button style={button}>Back To Home</button>
                   </Link>
                </div>
            </div>
        </div>
    );
}


export default NoMatch;
