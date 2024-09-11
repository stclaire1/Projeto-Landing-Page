import React from 'react';
import ChamadaFormulario from './ChamadaFormulario/ChamadaFormulario';
import Formulario from './Formulario/Formulario';
import styles from './SecaoConversao.module.css';

function SecaoConversao() {
    return (
        <section className={styles.sectionFormularioBackground} id='faleConosco'>
            <div>
                <ChamadaFormulario />
                <Formulario />
            </div>
        </section>
    );
}

export default SecaoConversao;