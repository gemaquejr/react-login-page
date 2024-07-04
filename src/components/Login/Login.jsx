import React, { useState } from 'react';
import logo from '../../assets/yes-logo.svg';

import styles from './Login.module.css';

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
    <div className={styles.background}>
      <div className={styles.rectangle}>
        <img src={logo} alt="Yes Certificações" className={styles.logo} />
      </div>
      <div className={styles.login_container}>
        <div className={styles.login_box}>
          <h1>Autenticação</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_group}>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className={styles.input_group}>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className={styles.login_button}>
              Entrar
            </button>
          </form>
          <a href="#" className={styles.forgot_password}>
            Esqueci minha senha
          </a>
          <p className={styles.policy}>
            Ao efetuar login, declaro estar de acordo com a{' '}
            <a href="#">Política de Privacidade</a> e o <a href="#">Termo de Uso</a>{' '}
            da Plataforma
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;