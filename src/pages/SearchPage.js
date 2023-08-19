import React, { useState, useEffect } from 'react';

//Importing SCSS Style
import './SearchPage.scss';

//Importing Logo
import logo from '../assets/logo.png';

function SearchPage() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    return (
        <div>
            {windowWidth > 768 && (
                <div className="container">
                    <img src={logo} alt="Imagem" className="image" />
                    <p className="above-search">Consulte sua encomenda:</p>
                    <input className="search-bar" placeholder='Digite o número do pedido' />
                    <div className="name-container">
                        <div className="name-with-description-client">
                            <div className="left-name">Nome do Cliente</div>
                            <div className="description">Ordem e nome do cliente</div>
                        </div>
                        <div className="name-with-description-valor">
                            <div className="right-name">R$ 42,00</div>
                            <div className="description">Valor do Pedido</div>
                        </div>
                    </div>
                    <div className="name-container">
                        <div className="name-with-description-data">
                            <div className="left-name">25/09/2018</div>
                            <div className="description">Data do pedido</div>
                        </div>
                        <div className="name-with-description-situacao">
                            <div className="right-name">Entregue | Entregar</div>
                            <div className="description">Situação da encomenda</div>
                        </div>
                    </div>
                </div>
            )}
            {windowWidth <= 768 && (
                <div className="container">
                    <img src={logo} alt="Imagem" className="image" />
                    <p className="above-search">Consulte sua encomenda:</p>
                    <input className="search-bar" placeholder='Digite o número do pedido' />
                    <div className="name-with-description-client">
                        <div className="left-name">Nome do Cliente</div>
                        <div className="description">Ordem e nome do cliente</div>
                    </div>
                    <div className="name-with-description-valor">
                        <div className="right-name">R$ 42,00</div>
                        <div className="description">Valor do Pedido</div>
                    </div>
                    <div className="name-with-description-data">
                        <div className="left-name">25/09/2018</div>
                        <div className="description">Data do pedido</div>
                    </div>
                    <div className="name-with-description-situacao">
                        <div className="right-name">Entregue | Entregar</div>
                        <div className="description">Situação da encomenda</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchPage;