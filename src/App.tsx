import React from 'react';
import './App.css';
import Playground from "./Components/Playground";

function App() {
    return (
        <div>
            <label style={{
                border: " thin solid grey",
                borderRadius: "7px",
                position: "fixed",
                bottom: 0,
                right: 0,
                padding: ".4em",
                margin: ".3em"
            }}>v0.2.0</label>
            <Playground/>
        </div>
    );
}

export default App;
