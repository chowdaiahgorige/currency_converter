import { useState } from "react";
import { currencyConverter } from "./Api/postApi.js";


/* eslint-disable react/no-unknown-property */
const App = () => {
  const [amount, setAmount] = useState(0); // Amount to convert
  const [fromCurrency, setFromCurrency] = useState("USD"); // Base currency
  const [toCurrency, setToCurrency] = useState("INR"); // Target currency
  const [convertedAmount, setConvertedAmount] = useState(null); // Converted value
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // handleConverCurrency
  const handleConvertCurrency = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await currencyConverter(fromCurrency, toCurrency, amount);
      const { conversion_result } = await res.data;
      setLoading(false);
      setConvertedAmount(conversion_result);
    } catch (error) {
      setError("Error fetching conversion rate");
      console.error(error);
    }
  };

  return (
    <section className="currency-converter">
      <div className="currency-div">
        <h1>Currency Converter</h1>
         <hr/>
        <div>
         
          <label htmlFor="currency_amount">
            Amount:
            <input
              type="number"
              id="currency_amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>

        <div className="currency-selector">
          <div>
            <label>
              From:
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="AUD">AUD</option>
                <option value="CNY">CNY</option>
                <option value="AED">AED</option>
                <option value="INR">INR</option>
                <option value="CNY">CNY</option>
                <option value="OMR">OMR</option>
                <option value="SOS">SOS</option>
                <option value="SCR">SCR</option>
                <option value="KWD">KWD</option>
                <option value="BHD">BHD</option>
                <option value="OMR">OMR</option>
                <option value="GBP">GBP</option>
                <option value="GIP">GIP</option>
                <option value="KYD">KYD</option>
                <option value="SGD">SGD</option>
                <option value="NZD">NZD</option>
                <option value="BZD">BZD</option>
                <option value="XCD">XCD</option>
                <option value="SAR">SAR</option>
                <option value="ZAR">ZAR</option>
                <option value="MXN">MXN</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="TTD">TTD</option>
                <option value="UYU">UYU</option>
                <option value="WST">WST</option>
                <option value="YER">YER</option>
                <option value="ZWL">ZWL</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              To:
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                 <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="AUD">AUD</option>
                <option value="CNY">CNY</option>
                <option value="AED">AED</option>
                <option value="INR">INR</option>
                <option value="CNY">CNY</option>
                <option value="OMR">OMR</option>
                <option value="SOS">SOS</option>
                <option value="SCR">SCR</option>
                <option value="KWD">KWD</option>
                <option value="BHD">BHD</option>
                <option value="OMR">OMR</option>
                <option value="GBP">GBP</option>
                <option value="GIP">GIP</option>
                <option value="KYD">KYD</option>
                <option value="SGD">SGD</option>
                <option value="NZD">NZD</option>
                <option value="BZD">BZD</option>
                <option value="XCD">XCD</option>
                <option value="SAR">SAR</option>
                <option value="ZAR">ZAR</option>
                <option value="MXN">MXN</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="TTD">TTD</option>
                <option value="UYU">UYU</option>
                <option value="WST">WST</option>
                <option value="YER">YER</option>
                <option value="ZWL">ZWL</option>
              </select>
            </label>
          </div>
        </div>

        <button
          disabled={loading || amount <= 0}
          onClick={handleConvertCurrency}
        >
          {loading ? "Converting.." : "Convert"}
        </button>

        <hr />
        {convertedAmount && (
          <div>
            <h2>
              {amount} {fromCurrency} = {convertedAmount.toFixed(2)}
              {toCurrency}
            </h2>
          </div>
        )}

        {error && <p>{error}</p>}
      </div>
    </section>
  );
};

export default App;
