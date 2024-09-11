import React from 'react';
import styles from './Titulo.module.css';

function Titulo(props) {
    return (
        <h3 className={styles.tituloGeral}>{props.titulo}</h3>
    );
}

export default Titulo;