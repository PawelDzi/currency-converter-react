import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result"
import { Clock } from "./Clock";
import { Wrapper, Button } from "./styled";

export const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <Wrapper
      onSubmit={onSubmit}>
      <Clock />
      <fieldset>
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
        <Button>
          Przelicz
        </Button>
      </p>

      <Result result={result} />
    </Wrapper>
  )
}

export default Form;