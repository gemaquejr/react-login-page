import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailPadrao = 'usuario@example.com';
    const senhaPadrao = 'senha123';

    if (email === emailPadrao && password === senhaPadrao) {
      console.log('Usuário autenticado!');
    } else {
      console.log('Usuário ou senha incorretos!');
    }
  };

  return (
    <div className="background">
      <div className="login-container">
        <div className="login-box">
          <h1>Autenticação</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>
          <a href="#" className="forgot-password">
            Esqueci minha senha
          </a>
          <p className="policy">
            Ao efetuar login, declaro estar de acordo com a
            <a href="#">Política de Privacidade</a> e o <a href="#">Termo de Uso</a>
            da Plataforma
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;