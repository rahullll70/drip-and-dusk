"use client";

import { useState, useEffect } from "react";

export const useTime = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Function to format the time
    const formatTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    // Set initial time immediately
    formatTime();

    // Update every second
    const timer = setInterval(formatTime, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  return time;
};