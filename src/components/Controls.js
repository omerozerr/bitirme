// Controls.js
import React from "react";

const Controls = ({ onTalkClick, onLullabyClick }) => {
    return (
        <div className="controls">
            <button onClick={onTalkClick}>Start Talking to Baby</button>
            {[...Array(5).keys()].map((number) => (
                <button key={number} onClick={() => onLullabyClick(number + 1)}>
                    Play Lullaby {number + 1}
                </button>
            ))}
        </div>
    );
};

export default Controls;
