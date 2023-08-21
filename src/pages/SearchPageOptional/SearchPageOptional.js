import React, { useState } from 'react';

//Importing SCSS Style
import './SearchPageOptional.scss';

//Importing Logo
import logo from '../../assets/logo.png';

//Importing Json Data
import dados from '../../data/dados.json';

//Importing Data Formater
import DataFormatter from '../../components/DataFormatter';

//Importing Modal
import Modal from '../../components/Modal/Modal';

//Import Axios
import axios from 'axios';

function SearchPageBasic() {

    //Todos os estados utilizados
    const [searchValue, setSearchValue] = useState('');
    const [foundOrder, setFoundOrder] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    //Funções para abrir e fechar o Modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    //Função para configurar o envio e as informações do Envio do Email
    const handleConfirmEmail = async (email) => {
        const emailData = {
            to: email,
            subject: 'STATUS DA ENCOMENDA',
            text: `
            Cliente Número: ${foundOrder.cliente.id}
            Cliente Nome: ${foundOrder.cliente.nome}
            Valor: ${foundOrder.valor}
            Situação: ${foundOrder.entregue === false ? 'Entregar' : 'Entregue'}
            `,
        };

        try {
            const response = await axios.post('http://localhost:5000/send-email', emailData);
            console.log(response.data.message);
            closeModal();
        } catch (error) {
            console.error('Erro ao enviar email:', error);
        }
    };

    //Função que filtra os resultados da API pelo número do pedido
    const handleSearch = () => {
        setIsLoading(true);
        setTimeout(() => {
            const orderToFind = dados.encomendas.find(order => order.numero === searchValue);
            setFoundOrder(orderToFind);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div>
            <div className="containerOptional">
                <img src={logo} alt="Imagem" className="image" />
                <p className="above-search">Consulte sua encomenda:</p>
                <input
                    type='text'
                    className="search-bar"
                    placeholder='Digite o número do pedido'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                {isLoading ?

                    <div className="loading-screen">
                        <div className="loading-spinner"></div>
                        <p>Carregando...</p>
                    </div>

                    :

                    foundOrder === null ?

                        <><div className="name-container">
                            <div className="name-with-description-client">
                                <div className="left-name">Nome do Cliente</div>
                                <div className="description">Número de ordem e nome do cliente</div>
                            </div>
                            <div className="name-with-description-valor">
                                <div className="right-name">R$ 42,00</div>
                                <div className="description">Valor do Pedido</div>
                            </div>
                        </div><div className="name-container">
                                <div className="name-with-description-data">
                                    <div className="left-name">25/09/2018</div>
                                    <div className="description">Data do pedido</div>
                                </div>
                                <div className="name-with-description-situacao">
                                    <div className="right-name">Entregue | Entregar</div>
                                    <div className="description">Situação da encomenda</div>
                                </div>
                            </div></>

                        : foundOrder === undefined ?

                            <div className="error-message">
                                Encomenda<br />
                                não encontrada!<br /><br />

                                <div className="spaceBetween">Procure novamente</div>
                            </div>

                            :

                            <><div className="name-container">
                                <div className="name-with-description-client">
                                    <div className="left-name">Nome do Cliente</div>
                                    <div className="description">N°{foundOrder.cliente.id} {foundOrder.cliente.nome}</div>
                                </div>
                                <div className="name-with-description-valor">
                                    <div className="right-name">R$ {foundOrder.valor}</div>
                                    <div className="description">Valor do Pedido</div>
                                </div>
                            </div><div className="name-container">
                                    <div className="name-with-description-data">
                                        <div className="left-name"><DataFormatter originalDate={foundOrder.data} /></div>
                                        <div className="description">Data do pedido</div>
                                    </div>
                                    <div className="name-with-description-situacao">
                                        <div className="right-name">{foundOrder.entregue === false ? 'Entregar' : 'Entregue'}</div>
                                        <div className="description">Situação da encomenda</div>
                                    </div>
                                </div>
                                <button onClick={openModal} className="email-button"> Receber Status Por Email</button>
                                <Modal
                                    isOpen={isModalOpen}
                                    onClose={closeModal}
                                    onConfirm={handleConfirmEmail}
                                />
                            </>

                }
            </div>
        </div>
    )
}
export default SearchPageBasic;