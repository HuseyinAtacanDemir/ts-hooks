import { useState, useEffect } from "react";

const useFetchData = <Payload>(
  url: string
): {
  data: Payload | null;
  done: boolean;
  error: boolean;
} => {
  const [data, setData] = useState<Payload | null>(null);
  const [done, setDone] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d: Payload) => {
        setData(d);
        setDone(true);
      })
      .catch((e) => setError(true));
  }, [url]);

  return {
    data,
    done,
    error,
  };
};

export default useFetchData;
