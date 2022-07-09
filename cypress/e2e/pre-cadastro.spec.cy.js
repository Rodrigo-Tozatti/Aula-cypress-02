/// <reference types="cypress" />

var faker = require('faker');

describe('funcionalidade pre cadasteo', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('deve completar o pre cadastro com sucesso', () => {
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type('!testeebac01$$')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
  });
  
});
