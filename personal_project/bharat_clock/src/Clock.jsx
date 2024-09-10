import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      // Get the current time in IST by adjusting for the time zone difference.
      const now = new Date();
      const offset = now.getTimezoneOffset() * 60000; // Get the time zone offset in milliseconds
      const istTime = new Date(now.getTime() + offset + 5.5 * 60 * 60000); // IST is GMT+5:30

      setTime(istTime);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup the interval on component unmount
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="clock-container">
      <h1>Bharat Clock</h1>
      <div className="clock">
        <h2>{formatTime(time)}</h2>
      </div>
    </div>
  );
};

export default Clock;
