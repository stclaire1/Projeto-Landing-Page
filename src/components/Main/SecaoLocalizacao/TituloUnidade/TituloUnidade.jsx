import React from 'react';
import localIcon from '../../../../assets/img/local2.png';
import styles from './TituloUnidade.module.css';

function TituloUnidade(props) {
    return (
        <div className={styles.unidades}>
            <img src={localIcon} alt="" />
            <h2>Unidades {props.nomeUnidade}</h2>
        </div>
    );
}

export default TituloUnidade;