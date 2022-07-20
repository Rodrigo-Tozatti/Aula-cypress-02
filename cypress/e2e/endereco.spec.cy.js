/// <reference types="cypress" />
import Enderecopage from  '../support/Page-objects/Endereco.page'

describe('Funcionalidade enderecos - faturamento e entrega', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
    cy.fixture('perfil').then(dados =>{
      cy.login(dados.usuario, dados.senha)
    })
  });

  it('Deve fazer cadastro de faturamento com sucesso', () => {
    Enderecopage.editarEnderecoFaturamento('Rodrigo', 'Rosseti', 'Fera_02', 'Brasil', 'Rua Jordão, 604', 'Lote 06, quarda 08', 'São Paulo', 'São Paulo', '87911-000', '(43) 98840-9982', 'rodrigo@rodrigo.com')

    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

  });
});