import React from "react";
import { Link } from "react-router-dom";
import "./FeatureOne.css";
import coin from "../assets/coin.gif"

const FeatureOne = () => {
    return (
        <>
            <div className="feature-1">
                <div className="desc-1">
                    <p>Welcome to our blockchain explorer - your gateway to the world of blockchain technology.</p>
                </div>
                <div className="card">
                    <img  src={coin}/>
                </div>
            </div>
        </>
    );
}

export default FeatureOne;