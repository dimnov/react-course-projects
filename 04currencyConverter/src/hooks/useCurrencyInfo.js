import { useState } from "react";

const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useState(() => {
    fetch(`${baseUrl}/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch(err => console.log(err))
  }, [currency]);

  return data;
}

