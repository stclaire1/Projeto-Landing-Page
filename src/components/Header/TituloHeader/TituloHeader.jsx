import React from 'react';
import styles from './TituloHeader.module.css';

function TituloHeader() {
    return (
        <div className={styles.tituloHeader}>
            <h1>Rede de postos JL</h1>
            <h2>
                <span>Qualidade e <span>atendimento</span>
                </span>
                <span>é o nosso</span> 
                <span>forte</span>
            </h2>
        </div>
    );
}

export default TituloHeader;