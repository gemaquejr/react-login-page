import React, { useState, useEffect } from 'react';
import logo from '../../assets/yes-logo.svg';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    const isValid = email.trim() !== '' && password.trim() !== '';
    setFormValid(isValid);
  }, [email, password]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailPadrao = 'usuario@example.com';
    const senhaPadrao = 'senha123';

    if (email === emailPadrao && password === senhaPadrao) {
      console.log('Usuário autenticado!');
    } else {
      setErrorMessage('Usuário ou senha incorretos!');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
                type={passwordVisible ? "text" : "password"}
                placeholder="Senha"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <span className={styles.toggle_password} onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </span>
              {errorMessage && (
                <div className={styles.error_message}>
                  {errorMessage}
                </div>
              )}
            </div>
            <button
              type="submit"
              className={`${styles.login_button} ${formValid ? styles.green_button : ''}`}
            >
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