"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import BabyStatus from "@/components/BabyStatus";
import Alert from "@/components/Alert";
import Controls from "@/components/Controls";
import "./App.css"; // Make sure to create an App.css for styles

export default function Home() {
    const [status, setStatus] = useState({
        temperature: 37,
        heartRate: 97,
        isAwake: true,
    });
    const [alerts, setAlerts] = useState([
        { message: "Baby is crying!" },
        { message: "Baby said 'Mama'!" },
        { message: "Baby is moving!" },
        // ... add more alerts as needed
    ]);

    const handleTalkClick = () => {
        console.log("Talk to baby");
        // Additional logic here
    };

    const handleLullabyClick = (lullabyNumber) => {
        console.log(`Play Lullaby ${lullabyNumber}`);
        // Additional logic here
    };

    return (
        <div className="App">
            <BabyStatus
                temperature={status.temperature}
                heartRate={status.heartRate}
                isAwake={status.isAwake}
            />
            <Alert alerts={alerts} />
            <Controls
                onTalkClick={handleTalkClick}
                onLullabyClick={handleLullabyClick}
            />
        </div>
    );
}
