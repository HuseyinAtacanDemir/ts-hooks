import { useState, useEffect } from "react";
import { UserInterface } from "../context/store";

const useFetchData = (
  url: string
): {
  data: UserInterface[] | null;
  done: boolean;
  error: boolean;
} => {
  const [data, setData] = useState<UserInterface[] | null>(null);
  const [done, setDone] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
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
