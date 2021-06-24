import { useState, useEffect } from "react";
import timings from "../data/timingsData.json";
import { Timings } from "../types";

const useFetchTimings = () => {
  const [data, setData] = useState<Timings>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(timings as Timings);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  return { data, loading };
};

export default useFetchTimings;
