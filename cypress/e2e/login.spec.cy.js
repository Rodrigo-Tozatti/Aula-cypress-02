/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
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

  it('deve fazer login com sucesso - usando arquivo de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

  });

  it.only('deve fazer login com sucesso - usando fixtures', () => {
    cy.fixture('perfil').then(dados => {
      cy.get('#username').type(dados.usuario)
      cy.get('#password').type(dados.senha, {log: false})
      cy.get('.woocommerce-form > .button').click()
  
      cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
    })


  });

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

