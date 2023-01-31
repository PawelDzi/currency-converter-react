import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result"
import "./style.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__field">
        <legend>Kalkulator walut</legend>
        <p>
          <label>
            Waluta:
            <select
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
              calculateResult
            >
              {currencies.map((currency => (
                <option
                  key={currency.short}
                  value={currency.short}
                >
                  {currency.name}
                </option>
              )))}
            </select>
            <p>
              Kwota:
              <input
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                required
                type="number"
                step="any"
                min="0"
              />
            </p>
          </label>
        </p>
      </fieldset>
      <p>
        <button className="button">Przelicz</button>
      </p>

      <Result result={result} />
    </form>
  )
}

export default Form;