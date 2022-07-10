/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('deve selecionar um produto da lista', () => {
    cy.get('.product-block').eq(7).click()
  });

  it.only('deve adicionar um produto ao carrinho', () => {
    var quantidade = 4

    cy.get('.product-block').eq(3).click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade +' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
  });

});