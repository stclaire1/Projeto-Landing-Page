import React from 'react';
import styles from './SecaoBeneficios.module.css';

const Beneficio = ({ titulo, subtitulo, descricao, imagem, invertido }) => {
    return (
      <div className={`${styles.beneficio} ${invertido ? styles.invertido : ''}`}>
        <div className={styles.texto}>
          <h2>{titulo}</h2>
          <h3>{subtitulo}</h3>
          <p>{descricao}</p>
        </div>
        <div className={styles.imagem}>
          <img src={imagem} alt={titulo} className={styles.imagem}/>
        </div>
      </div>
    );
  };

export default Beneficio;