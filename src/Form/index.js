import "./style.css";

const Form = (props) => (
    <form className="form js-form">
        <fieldset className="form__field">
          <legend>Kalkulator walut</legend>
          <p>
            <label>
              <input type="radio" className="js-dolar" name="waluta" checked/>Dolar
            </label>
          </p>
          <p>
            <label>
              <input type="radio" className="js-euro" name="waluta"/>Euro
            </label>
          </p>
          <p>
            <label>
              <input type="radio" className="js-frank" name="waluta"/>Frank
            </label>
          </p>

          <p>
            <label>
              Kwota: <input type="number" className="js-sum" step="any" min="0" />
            </label>
          </p>
        </fieldset>
        <p>
          <button className="button">Przelicz</button>
        </p>
        <p>
          <span className="currency"></span><span className="result1"> Dolar </span>= <span className="result2">N/A</span>
          złotych
        </p>
      </form>
)

export default Form;