import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TermsOfUse.module.css';

const TermsOfUse = () => {
    return (
        <div className={styles.background}>
          <div className={styles.rectangle}></div>
          <div className={styles.terms_container}>
            <div className={styles.terms_box}>
              <h1>Termo de Uso</h1>
                <p>Na YES SERVIÇOS EM CERTIFICAÇÃO EIRELI, privacidade e segurança são prioridades e nos comprometemos com a transparência do tratamento de dados pessoais dos nossos usuários/clientes. Por isso, está presente Política de Privacidade estabelece como é feita a coleta, uso e transferência de informações de clientes ou outras pessoas que acessam ou usam nosso site.</p>
                <p>Ao utilizar nossos serviços, você entende que coletaremos e usaremos suas informações pessoais nas formas descritas nesta Política, sob as normas da Constituição Federal de 1988 (art. 5º, LXXIX; e o art. 22º, XXX – incluídos pela EC 115/2022), das normas de Proteção de Dados (LGPD, Lei Federal 13.709/2018), das disposições consumeristas da Lei Federal 8078/1990 e as demais normas do ordenamento jurídico brasileiro aplicáveis.</p>
                <p>Dessa forma, a YES SERVIÇOS EM CERTIFICAÇÃO EIRELI, doravante denominada simplesmente como “YES CERTIFICAÇÕES”, inscrita no CNPJ/MF sob o nº 18.073.629/0001-27, no papel de Controladora de Dados, obriga-se ao disposto na presente Política de Privacidade.</p>
                <p>A YES SERVIÇOS EM CERTIFICAÇÃO EIRELI compromete-se a garantir e preservar a privacidade e o sigilo e segurança de seus dados pessoais, pois é nosso desejo estabelecer uma relação duradoura e confiável.</p>
                <Link to="/" className={styles.back_button}>
                    Voltar para Home
                </Link>
            </div>
          </div>
        </div>
    );
};

export default TermsOfUse;