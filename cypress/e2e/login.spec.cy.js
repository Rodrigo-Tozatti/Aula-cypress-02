/// <reference types="cypress" />

context('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });
  
  afterEach(() => {
    cy.screenshot()
  });

  it('deve fazer Login com sucesso', () => {
    cy.get('#username').type('aluno-ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
  })

  it('Deve exibir uma mensagem de erro ao iniciar usuario inválidos', () => {
    cy.get('#username').type('ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida')
  })

  it('Deve exibir uma mensagem de erro ao iniciar senha inválida', () => {
    cy.get('#username').type('aluno-ebac@teste.com')
    cy.get('#password').type('teste098@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. ')
  })

})

