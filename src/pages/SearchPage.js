import React, { useState } from 'react';

//Importing SCSS Style
import './SearchPage.scss';

//Importing Logo
import logo from '../assets/logo.png';

//Importing Json Data
import dados from '../data/dados.json';

//Importing Data Formater
import DataFormatter from '../components/DataFormatter';

function SearchPage() {

    const [searchValue, setSearchValue] = useState('');
    const [foundOrder, setFoundOrder] = useState(null);

    const handleSearch = () => {
        const orderToFind = dados.encomendas.find(order => order.numero === searchValue);
        setFoundOrder(orderToFind);
    };

    return (
        <div>
            <div className="container">
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
                {console.log(foundOrder)}
                {foundOrder === null ?

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
                            </div></>

                }
            </div>
        </div>
    )
}
export default SearchPage;