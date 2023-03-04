import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const ApiExchangeRates = "https://api.exchangerate.host/latest?base=PLN";
        const response = await fetch(ApiExchangeRates);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { rates, date } = await response.json();

        setRatesData({
          state: "success",
          rates,
          date,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(fetchRates, 1000);
  }, []);

  return ratesData;
};