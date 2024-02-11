// Alert.js
import React from "react";

const Alert = ({ alerts }) => {
    return (
        <div className="alerts">
            {alerts.map((alert, index) => (
                <div key={index} className="alert">
                    Alert! {alert.message}
                </div>
            ))}
        </div>
    );
};

export default Alert;
