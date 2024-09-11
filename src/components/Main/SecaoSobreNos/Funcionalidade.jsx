import React from 'react';
import styles from './SecaoSobreNos.module.css';

const Funcionalidade = ({ imagem, titulo, descricao }) => {
    return (
        <div className={styles.funcionalidade}>
            <img src={imagem} alt={titulo} className="imagem-icone" />
            <h5 className={styles.funcionalidadeTitulo}>{titulo}</h5>
            <p className={styles.funcionalidadeDescricao}>{descricao}</p>
        </div>
    );
}

export default Funcionalidade;