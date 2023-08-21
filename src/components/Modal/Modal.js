import React, { useState, useEffect } from 'react';

//Importing Styles
import './Modal.scss';

function Modal({ isOpen, onClose, onConfirm }) {

    //Todos os estados utilizados
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    //Expresão regular para validação do Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //UseEffect para exibir a mensagem de Sucesso com tempo
    useEffect(() => {
        if (successMessage) {
            const timeout = setTimeout(() => {
                setSuccessMessage('');
                onClose();
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [successMessage, onClose]);

    //Função do onChange que verifica enquanto usuário digita a validade do Email
    const handleEmailChange = (newEmail) => {
        setEmail(newEmail);
        setErrorMessage('');
        setSuccessMessage('');

        if (!emailRegex.test(newEmail)) {
            setErrorMessage('Email inválido');
        }
    };

    //Função do botão confirmar que verifica se o email é Válido e envia a mensagem para a tela e confirma a requisição para o Backend
    const handleConfirm = () => {
        if (!emailRegex.test(email)) {
            setErrorMessage('Email inválido');
            setSuccessMessage('');
            return;
        }

        setSuccessMessage('Email enviado com sucesso!');
        setErrorMessage('');

        onConfirm(email);
        setEmail('');
    };

    //If para não deixar o Modal aberto para sempre, apenas quando o botão de Receber Status for clicado
    if (!isOpen) {
        return null;
    }

    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                {successMessage && !errorMessage ? (
                    <p className="success-message">{successMessage}</p>
                ) : (
                    <>
                        <h2>Receber Status por Email</h2>
                        <input
                            className='input-modal'
                            placeholder='Digite seu email'
                            type="email"
                            value={email}
                            onChange={(e) => handleEmailChange(e.target.value)}
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button className="confirm-button" onClick={handleConfirm}>
                            Confirmar
                        </button>
                        <button className="cancel-button" onClick={onClose}>
                            Cancelar
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Modal;
