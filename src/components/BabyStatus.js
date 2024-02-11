// BabyStatus.js
import React from "react";

const BabyStatus = ({ temperature, heartRate, isAwake }) => {
    return (
        <div className="baby-status">
            <div>Body Temperature: {temperature} </div>
            <div>Heart Rate: {heartRate} BPM</div>
            <div>{isAwake ? "Baby is Awake" : "Baby is Asleep"}</div>
        </div>
    );
};

export default BabyStatus;
