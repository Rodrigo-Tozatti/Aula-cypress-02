/// <reference types="cypress" />
import Enderecopage from '../support/Page-objects/Endereco.page'
const endereco = require('../fixtures/endereco.json')

describe('Funcionalidade enderecos - faturamento e entrega', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
    cy.fixture('perfil').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })
  });

  it('Deve fazer cadastro de faturamento com sucesso', () => {
    Enderecopage.editarEnderecoFaturamento('Rodrigo', 'Rosseti', 'Fera_02', 'Brasil', 'Rua Jordão, 604', 'Lote 06, quarda 08', 'São Paulo', 'São Paulo', '87911-000', '(43) 98840-9982', 'rodrigo@rodrigo.com')

    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

  });

  it.only('Deve fazer cadastro de faturamento com sucesso - utilizando arquivo de dados', () => {
    Enderecopage.editarEnderecoFaturamento(
      endereco[2].nome,
      endereco[2].sobrenome,
      endereco[2].empresa,
      endereco[2].pais,
      endereco[2].endereco,
      endereco[2].complemento,
      endereco[2].cidade,
      endereco[2].estado,
      endereco[2].cep,
      endereco[2].telefone,
      endereco[2].email
    )

    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

  });
});