import styles from './Formulario.module.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import InputMask from 'react-input-mask';

function Formulario() {

    const [form, setForm] = useState({
        nome: "",
        email: "",
        telefone: "",
        assunto: ""
    });

    const [message, setMessage] = useState('');
    const [messageClass, setMessageClass] = useState('');
    const [showMessage, setShowMessage] = useState(false); // Estado para controlar a visibilidade da mensagem

    function getData(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    }

    function validar() {
        if (form.nome === "" || form.email === "" || form.telefone === "" || form.assunto === "") {
            setMessage('Todos os campos devem ser preenchidos.');
            setMessageClass('error');
            setShowMessage(true); // Mostrar a mensagem
        } else {

            const templateParams = {
                from_name: form.nome,
                from_email: form.email,
                from_telefone: form.telefone,
                from_assunto: form.assunto
            };

            emailjs.send("service_99qwbme", "template_7xawvwc", templateParams, "5lkb3hoLNI_j4WRaa").then(
                (response) => {
                    setMessage('Formulário enviado com sucesso');
                    setMessageClass('success');
                    setShowMessage(true); // Mostrar a mensagem

                    // Ocultar a mensagem após 2 segundos
                    setTimeout(() => {
                        setShowMessage(false);
                    }, 4000);
                },
                (error) => {
                    setMessage('Erro no envio');
                    setMessageClass('error');
                    setShowMessage(true); // Mostrar a mensagem
                },
            );
        }
    }

    return (
        <div className={styles.formulario} id='faleConosco'>
            <form>
                <div className={styles.inputBox}>
                    <label htmlFor="">Nome</label>
                    <input type="text" placeholder='Nome completo' name='nome' onChange={getData} />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="">E-mail</label>
                    <input type="email" placeholder='exemplo@email.com' name='email' onChange={getData} />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="">Telefone</label>
                    <InputMask 
                        mask="(99) 99999-9999" 
                        placeholder='(xx) xxxxx-xxxx' 
                        name='telefone' 
                        value={form.telefone}
                        onChange={getData} 
                    />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="">Assunto</label>
                    <input className={styles.assunto} type="text" placeholder='Informe aqui o motivo do seu contato' name='assunto' onChange={getData} />
                </div>
                <input type="button" value={"ENVIAR"} className={styles.btnEnviar} onClick={validar} />
                {showMessage && <p className={messageClass}>{message}</p>}
            </form>
        </div>
    );
}

export default Formulario;