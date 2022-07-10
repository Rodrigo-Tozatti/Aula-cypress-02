/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

  before(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('deve selecionar um produto da lista', () => {
    cy.get('.product-block').eq(7).click()
  });

  it.only('deve adicionar um produto ao carrinho', () => {
    cy.get('.product-block').eq(3).click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(3)
    cy.get('.single_add_to_cart_button').click()

  });

});