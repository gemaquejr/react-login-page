import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
    return (
        <div className={styles.background}>
          <div className={styles.rectangle}></div>
          <div className={styles.privacy_container}>
            <div className={styles.privacy_box}>
              <h1>Política de Privacidade</h1>
                <p>O que é uma Política de Privacidade?</p>
                <p>Uma Política de Privacidade funciona como uma forma de informar os usuários
                    quais dados serão coletados durante o uso do site ou aplicativo.
                    Reunindo todas as informações necessárias quanto às proteções e limitações
                    que serão impostas durante a coleta dos dados dos Usuários.
                </p>
                <p>Trata-se de um documento legal que estabelece as informações específicas
                    sobre quais dados serão coletados durante o uso da plataforma, bem como
                    a forma que eles serão protegidos e quais ações os próprios usuários
                    poderão tomar sobre tal coleta.
                </p>
                <p>Quando usar uma Política de Privacidade</p>
                <p>Este documento é útil nas seguintes situações:</p>
                <ul>
                    <li>Para informar o usuário acerca da forma da qual dados serão coletados durante o uso de um site;</li>
                    <li>Para informar os usuários sobre como os dados serão utilizados após sua coleta;</li>
                    <li>Para esclarecer qual canal de comunicação poderá ser utilizado em caso de eventuais reclamações ou dúvidas;</li>
                    <li>Para garantir o consentimento do usuário a respeito de todos os mecanismos utilizados no site, assim como as limitações e direitos que lhe são impostos.</li>
                </ul>
            </div>
          </div>
        </div>
    );
};

export default PrivacyPolicy;