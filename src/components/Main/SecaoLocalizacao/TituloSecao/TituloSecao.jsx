import React from 'react';
import styles from './TituloSecao.module.css';

function TituloSecao() {
    return (
        <div className={styles.title}>
            <h2>Saiba onde nos encontrar</h2>
            <p>Aqui você pode <b>encontrar todas as nossas unidades facilmente.</b> Fizemos uma seleção com todos os nossos endereços até o momento!</p>
        </div>
    );
}

export default TituloSecao;