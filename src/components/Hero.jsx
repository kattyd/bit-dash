import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css"
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <>        
            <Navbar />
            <div className="hero">
                <div className="content">
                    <h1>Explore the power of Blockchain technology</h1>
                    <p>Welcome to our blockchain explorer - your gateway to the world of blockchain technology. Explore transactions, blocks and addresses effortlessly.</p>
                    <div className="btn-content">
                        <a href="https://kaaahtea-d.vercel.app" target="_blank" rel="noopener noreferrer">
                            <button className="learn">Learn More</button>
                        </a>
                        <button> 
                            <Link to="/dashboard">Go to Dashboard</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Hero;