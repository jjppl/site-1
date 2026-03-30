import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [number, setNumber] = useState(0);

  function handleIncrease() {
    setNumber((prevState) => prevState + 1);
    document.title = `home: ${number + 1} `;
  }
  function handleDecrease() {
    if (number === 0) {
      return;
    }
    setNumber((prevState) => prevState - 1);
    document.title = `home: ${number - 1}`;
  }
  function handleClear() {
    setNumber(0);
    document.title = `home: 0`;
  }
  // useEffect(() => {
  //   document.title = `home: ${number}`;
  // }, [number]);
  return (
    <div>
      <div>
        <h1>Bem-vindo!</h1>
        <p>Você está logado 🎉</p>
      </div>
      <div className="home-button">
        <div>
          <button
            className="login-button"
            type="button"
            onClick={handleIncrease}
          >
            Aumentar
          </button>
        </div>
        <div>
          <button
            className="login-button"
            type="button"
            onClick={handleDecrease}
          >
            Diminuir
          </button>
        </div>
        <div>
          <button className="login-button" type="button" onClick={handleClear}>
            Zerar
          </button>
        </div>
      </div>
      <div>
        <p>{number}</p>
      </div>
      <div>
        <p>
          {new Date().getHours()}:{new Date().getMinutes()}
        </p>
      </div>
    </div>
  );
}

export default Home;
