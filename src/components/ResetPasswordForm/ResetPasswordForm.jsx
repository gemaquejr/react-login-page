import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import styles from './ResetPasswordForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [validation, setValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
    noLogin: false,
    match: false
  });
  const navigate = useNavigate();

  const handleNewPasswordChange = (event) => {
    const password = event.target.value;
    setNewPassword(password);

    setValidation({
      ...validation,
      length: password.length >= 8 && password.length <= 32,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[^A-Za-z0-9]/.test(password),
      noLogin: !password.includes('login')
    });
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);
    setValidation({
      ...validation,
      match: newPassword === confirmPassword
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword === confirmPassword) {
      if (Object.values(validation).every(Boolean)) {
        console.log('Senha redefinida com sucesso!');
        Swal.fire({
          icon: 'success',
          title: 'Senha Redefinida!',
          text: 'Sua senha foi redefinida com sucesso.',
        }).then(() => {
          navigate('/'); 
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'A senha não atende aos critérios de validação. Por favor, tente novamente.',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'As senhas não coincidem. Por favor, tente novamente.',
      });
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className={styles.background}>
      <div className={styles.rectangle}></div>
      <div className={styles.reset_container}>
        <div className={styles.reset_box}>
          <h1>Redefinição de Senha</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_group}>
              <input
                type={newPasswordVisible ? "text" : "password"}
                placeholder="Nova senha*"
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
              />
              <span className={styles.toggle_password} onClick={toggleNewPasswordVisibility}>
                <FontAwesomeIcon icon={newPasswordVisible ? faEyeSlash : faEye} />
              </span>
            </div>
            <div className={styles.input_group}>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirmar senha*"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              <span className={styles.toggle_password} onClick={toggleConfirmPasswordVisibility}>
                <FontAwesomeIcon icon={confirmPasswordVisible ? faEyeSlash : faEye} />
              </span>
            </div>
            {newPassword && (
              <div className={styles.validation_balloon}>
                <h3>Segurança da senha</h3>
                <div className={styles.validation_item}>
                  <span className={validation.length ? styles.valid : styles.invalid}>*</span>
                  Deve conter, ao menos, 8 e máximo de 32 caracteres
                </div>
                <div className={styles.validation_item}>
                  <span className={validation.uppercase ? styles.valid : styles.invalid}>*</span>
                  Deve conter, ao menos, uma letra maiúscula
                </div>
                <div className={styles.validation_item}>
                  <span className={validation.lowercase ? styles.valid : styles.invalid}>*</span>
                  Deve conter, ao menos, uma letra minúscula
                </div>
                <div className={styles.validation_item}>
                  <span className={validation.number ? styles.valid : styles.invalid}>*</span>
                  Deve conter, ao menos, um número
                </div>
                <div className={styles.validation_item}>
                  <span className={validation.specialChar ? styles.valid : styles.invalid}>*</span>
                  Deve conter, ao menos, um caractere especial
                </div>
                <div className={styles.validation_item}>
                  <span className={validation.noLogin ? styles.valid : styles.invalid}>*</span>
                  Não utilizar o seu próprio login na senha
                </div>
                <div className={styles.validation_item}>
                  <span className={validation.match ? styles.valid : styles.invalid}>*</span>
                  As senhas digitadas devem ser idênticas
                </div>
              </div>
            )}
            <button
              type="submit"
              className={styles.send_button}
              disabled={!newPassword.trim() || !confirmPassword.trim()}
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

export default ResetPasswordForm;