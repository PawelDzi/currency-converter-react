import { useState } from "react";
import { Result } from "./Result"
import { Clock } from "./Clock";
import { Wrapper, Button, WrapperSelect, WrapperInput, Loading, ErrorMessage } from "./styled";
import { useRatesData } from "./useRatesData"

export const Form = () => {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

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
      {ratesData.state === "loading"
        ? (
          <Loading>
            Sekunda... Ładujemy kursy walut
          </Loading>
        )
        : (
          ratesData.state === "error" ? (
            <ErrorMessage>
              Hmm... Coś poszło nie tak. Sprawdź połączenie z internetem. <br />
              Jeśli masz połączenie z internetem, musi być to błąd z naszej strony. <br />
              Przepraszamy za niedogodności i zapraszamy później.
            </ErrorMessage>
          ) : (
            <p>
              <fieldset>
                <legend>Kalkulator walut</legend>
                <p>
                  <label>
                    Waluta:
                    <WrapperSelect
                      value={currency}
                      onChange={({ target }) => setCurrency(target.value)}
                      calculateResult
                    >
                      {Object.keys(ratesData.rates).map((currency => (
                        <option
                          key={currency}
                          value={currency}
                        >
                          {currency}
                        </option>
                      )))}
                    </WrapperSelect>
                    <p>
                      Kwota: {" "}
                      <WrapperInput
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
            </p>
          )
        )
      }
    </Wrapper>
  )
}

export default Form;