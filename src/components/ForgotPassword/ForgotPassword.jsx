import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Email de recuperação enviado para:', email);
      Swal.fire({
        icon: 'success',
        title: 'E-mail Enviado!',
        text: `Um e-mail de recuperação foi enviado para ${email}.`,
      }).then(() => {
        navigate('/reset-password', { state: { email }});
      });
      setEmail('');
    };
  
    const handleCancel = () => {
      navigate('/');
    };

  return (
    <div className={styles.background}>
      <div className={styles.rectangle}>
      </div>
      <div className={styles.login_container}>
        <div className={styles.login_box}>
          <h1>Recuperação de Senha</h1>
          <p>Informe o E-mail do usuário do qual deseja recuperar a senha</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_group}>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <p>Será enviado um e-mail para o endereço cadastrado, contendo o <br />link de redefinição de senha</p>
            <button
              type="submit"
              className={styles.send_button}
              disabled={!email.trim()}
            >
              Enviar
            </button>
            <button
              type="button"
              className={styles.cancel_button}
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;