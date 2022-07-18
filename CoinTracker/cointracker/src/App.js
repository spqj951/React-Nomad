import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  });

  const [coin, setCoin] = useState(0);
  const [coinSymbol, setCoinSymbol] = useState("");
  const onSelect = (event) => {
    setCoin(coins[event.target.selectedIndex].quotes.USD.price);
    setCoinSymbol(coins[event.target.selectedIndex].symbol);
  };
  const onChange = (event) => {
    setDollar(event.target.value);
  };
  const [resultMoney, setResultMoney] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    setResultMoney(dollar / coin);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading... </strong>
      ) : (
        <select onChange={onSelect}>
          {coins.map((coin, index) => (
            <option key={index} value={index}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}USD
            </option>
          ))}
        </select>
      )}
      {loading ? null : (
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={dollar}
            type="text"
            placehodler="USD"
          />
          <button>계산</button>
        </form>
      )}
      {dollar === 0 ? null : (
        <p>Your money could be changed into {`${resultMoney} ${coinSymbol}`}</p>
      )}
    </div>
  );
}

export default App;
