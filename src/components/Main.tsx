"use client";
import React, { useState, useEffect } from "react";

const Main = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [currencyPair, setCurrencyPair] = useState("USD_PKR"); // Default currency pair

  const handleCurrencyChange = (event: any) => {
    setCurrencyPair(event.target.value);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4e6ec039edmshb662f67dd132655p1a33a5jsn574d932d18df",
        "X-RapidAPI-Host": "exchange-rate-by-api-ninjas.p.rapidapi.com",
      },
    };

    fetch(
      `https://exchange-rate-by-api-ninjas.p.rapidapi.com/v1/exchangerate?pair=${currencyPair}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setExchangeRate(response.exchange_rate);
      })
      .catch((err) => console.error(err));
  }, [currencyPair]);

  return (
    <div>
      <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-md p-4">
        <div className="text-4xl font-bold text-center sm:text-left">
          Currency Converter
        </div>
        <div className="flex items-center mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Enter your currency here...."
            className="outline outline-1 rounded-md p-3 w-full sm:w-64 md:w-96 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={handleCurrencyChange}
          />
          <button
            type="button"
            className="rounded-md p-3 bg-blue-500 text-white ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Convert
          </button>
        </div>
      </nav>
      <section className="py-20">
        <h1 className="text-center text-6xl font-bold">
          <span id="exchange_rate">{exchangeRate}</span>
        </h1>
      </section>
    </div>
  );
};

export default Main;
