import axios from "axios";

const api = axios.create({
  baseURL:
    "https://v6.exchangerate-api.com/v6/842c98dac13d64733f206389",
});

// we need to crate a  get request
export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};