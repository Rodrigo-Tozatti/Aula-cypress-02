/// <reference types="cypress" />

context('Funcionalidade Login' , () =>{

  it('deve fazer Login com sucesso' , () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno-ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    
    cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
  })

  it('Deve exibir uma mensagem de erro ao iniciar usuario inválidos' , () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    
    cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida')
  })

  it('Deve exibir uma mensagem de erro ao iniciar senha inválida' , () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno-ebac@teste.com')
    cy.get('#password').type('teste098@teste.com')
    cy.get('.woocommerce-form > .button').click()
    
    cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido. ')
  })
 
})

