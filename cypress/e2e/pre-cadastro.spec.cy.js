/// <reference types="cypress" />

import { Faker, faker } from '@faker-js/faker';

describe('funcionalidade pre cadasteo', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
  });

  it('deve completar o pre cadastro com sucesso', () => {
    var emailFaker = faker.internet.email
    var password = faker.internet.password
    var primeiroNome = faker.name.firstName
    var segundoNome = faker.name.lastName

    cy.get('#reg_email').type(emailFaker())
    cy.get('#reg_password').type(password())
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(primeiroNome())
    cy.get('#account_last_name').type(segundoNome())
    cy.get('.woocommerce-Button').click()

    cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
  });
  
});
