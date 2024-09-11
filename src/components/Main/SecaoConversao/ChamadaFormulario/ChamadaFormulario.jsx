import React from 'react';
import styles from './ChamadaFormulario.module.css';

function ChamadaFormulario() {
    return (
        <div className={styles.chamadaFormulario}>
            <h3>QUEREMOS TE OUVIR!</h3>
            <p>Caso tenha alguma <span>dúvida</span>, <span>sugestão</span> ou <span>proposta de colaboração</span>, por favor, entre em contato conosco. Nós, da <span>rede de postos JL</span>, estamos à disposição para atendê-lo!</p>
        </div>
    );
}

export default ChamadaFormulario;