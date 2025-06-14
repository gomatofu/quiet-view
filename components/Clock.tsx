"use client";

import { useEffect, useState } from "react";

interface ClockProps {
  timezone: string;
}

export default function Clock({ timezone }: ClockProps) {
  const [time, setTime] = useState<string>("");
  const [period, setPeriod] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeOptions: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      const fullTime = now.toLocaleTimeString("en-US", timeOptions);
      const [mainTime, timePeriod] = fullTime.split(" ");
      setTime(mainTime);
      setPeriod(timePeriod || "");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  const getTimezoneAbbr = (tz: string) => {
    const abbr: { [key: string]: string } = {
      "Asia/Tokyo": "JST",
      "America/New_York": "EST",
      "Europe/London": "GMT",
      "Europe/Paris": "CET",
      "Australia/Sydney": "AEDT",
      "America/Sao_Paulo": "BRT",
    };
    return abbr[tz] || "UTC";
  };

  return (
    <time className="text-sm text-zinc-400">
      {time} {period} {getTimezoneAbbr(timezone)}
    </time>
  );
}