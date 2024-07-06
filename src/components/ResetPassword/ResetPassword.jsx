import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoReset from '../../assets/yes-logo-reset.svg';

import styles from './ResetPassword.module.css';

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || { email: '[Email do usuário]' };

  const handleCreateNewPassword = () => {
    navigate('/reset-password-form');
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} | ${hours}:${minutes}`;
  };

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  const getUserName = (email) => {
    return email.split('@')[0];
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logoReset} alt="Yes Certificações" className={styles.logo} />
      </div>
      <div className={styles.content}>
        <h1>Olá, {getUserName(email)}</h1>
        <p>
          Recebemos um pedido de recuperação de acesso ao <strong>{email}</strong>. <br />Clique no botão abaixo para criar uma nova senha:
        </p>
        <button className={styles.createPasswordButton} onClick={handleCreateNewPassword}>
          Criar nova senha
        </button>
        <p className={styles.timestamp}>{formattedDate}</p>
        <p className={styles.notice}>
          Se você não fez essa solicitação, desconsidere esta <br /> mensagem. Mas fique tranquilo, pois estamos aqui para <br />manter sua conta segura.
        </p>
        <p className={styles.footer}>
          Você não precisa responder este e-mail, pois este é um e-mail automático
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;