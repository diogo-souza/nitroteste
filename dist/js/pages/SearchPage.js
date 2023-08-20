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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Imagem",
    className: "image"
  }), /*#__PURE__*/React.createElement("p", {
    className: "above-search"
  }, "Consulte sua encomenda:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "search-bar",
    placeholder: "Digite o n\xFAmero do pedido",
    value: searchValue,
    onChange: e => setSearchValue(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    }
  }), foundOrder === null ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "name-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name-with-description-client"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left-name"
  }, "Nome do Cliente"), /*#__PURE__*/React.createElement("div", {
    className: "description"
  }, "N\xFAmero de ordem e nome do cliente")), /*#__PURE__*/React.createElement("div", {
    className: "name-with-description-valor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "right-name"
  }, "R$ 42,00"), /*#__PURE__*/React.createElement("div", {
    className: "description"
  }, "Valor do Pedido"))), /*#__PURE__*/React.createElement("div", {
    className: "name-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name-with-description-data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left-name"
  }, "25/09/2018"), /*#__PURE__*/React.createElement("div", {
    className: "description"
  }, "Data do pedido")), /*#__PURE__*/React.createElement("div", {
    className: "name-with-description-situacao"
  }, /*#__PURE__*/React.createElement("div", {
    className: "right-name"
  }, "Entregue | Entregar"), /*#__PURE__*/React.createElement("div", {
    className: "description"
  }, "Situa\xE7\xE3o da encomenda")))) : foundOrder === undefined ? /*#__PURE__*/React.createElement("div", {
    className: "error-message"
  }, "Encomenda", /*#__PURE__*/React.createElement("br", null), "n\xE3o encontrada!", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "spaceBetween"
  }, "Procure novamente")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "name-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name-with-description-client"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left-name"
  }, "Nome do Cliente"), /*#__PURE__*/React.createElement("div", {
    className: "description"
  }, "N\xB0", foundOrder.cliente.id, " ", foundOrder.cliente.nome)), /*#__PURE__*/React.createElement("div", {
    className: "name-with-description-valor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "right-name"
  }, "R$ ", foundOrder.valor), /*#__PURE__*/React.createElement("div", {
    className: "description"
  }, "Valor do Pedido"))), /*#__PURE__*/React.createElement("div", {
    className: "name-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name-with-description-data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left-name"
  }, /*#__PURE__*/React.createElement(DataFormatter, {
    originalDate: foundOrder.data
  })), /*#__PURE__*/React.createElement("div", {
    className: "description"
  }, "Data do pedido")), /*#__PURE__*/React.createElement("div", {
    className: "name-with-description-situacao"
  }, /*#__PURE__*/React.createElement("div", {
    className: "right-name"
  }, foundOrder.entregue === false ? 'Entregar' : 'Entregue'), /*#__PURE__*/React.createElement("div", {
    className: "description"
  }, "Situa\xE7\xE3o da encomenda"))))));
}
export default SearchPage;
