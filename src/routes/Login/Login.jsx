import { useState } from "react";
import heroImg from "../../assets/hero.png";
import "./Login.css";
import { List } from "../../mock/list";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = List.find((element) => element.email === email);
    const isValidPassword = List.find(
      (element) => element.password === password,
    );
    console.log("Email:", email);
    console.log("Senha:", password);
    if (regex.test(email) && isValidEmail && isValidPassword) {
      navigate("/home");
    } else {
      alert("Email ou senha invalida ");
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={heroImg} alt="Hero" className="hero-img" />

        <h2>Login</h2>

        <form onSubmit={handleLogin} className="form">
          <div className="login-item">
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-item">
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-item">
            <button className="login-button" type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
