import React from 'react';
import styles from './CallToAction.module.css';

function CallToAction() {
    return (
        <div className={styles.botoesHeader}>
            <a href="#quemSomos">Quem somos</a>
            <a href="#faleConosco">Fale conosco</a>
        </div>
    );
}

export default CallToAction;