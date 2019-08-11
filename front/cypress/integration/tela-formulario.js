/*
Dentro da pasta do projeto
 - npm install --save-dev cypress

Alterar "ng 2e2" dentro do package.json para "cypress open"

Para rodar e criar a pasta do cypress com os testes 
 - npm run e2e
 */

describe('Testes do Formulário', function() {
    it('Visitar página do formulário', function() {
      cy.visit('http://localhost:4200')

      cy.contains('Hospital Badim')
    })

    it('Fazer login', function() {
        cy.url().should('include', '/login')

        cy.get('#usuario')
            .type('usuario@email.com')
            .should('have.value', 'usuario@email.com')

        cy.get('#senha')
            .type('123456')
            .should('have.value', '123456')

        cy.get('#btnLogin').click()

    })

    it('Clicar no menu "Painel"', function() {
        cy.contains('Painel').click()
        
        //Para verificar a nova url
        cy.url().should('include', '/painel')
    })

    it('Preencher campos obrigatórios do formulário', function() {
        cy.get('#notaFiscal')
            .type('1234')
            .should('have.value', '1234') //verifica se o valor digitado no campo foi realmente digitado

        cy.get('#dtReceb')
            .type('2019-08-04')
            .should('have.value', '2019-08-04')

        cy.get('#oc1')
            .type('5555')
            .should('have.value', '5555')

        cy.get('#fornecedor')
            .type('Nome do Fornecedor')
            .should('have.value', 'Nome do Fornecedor')

        cy.get('#comprador')
            .type('Nome do Comprador')
            .should('have.value', 'Nome do Comprador')

        cy.get('#conferente1')
            .select('Guilherme Castro')

        cy.get('#conferente2')
            .select('Marcos Vinicius')

        cy.get('#apresCorreta')
            .select('Sim')

        cy.get('#validCorreta')
            .select('Não')

        cy.get('#tempCorreta')
            .select('Não')

        cy.get('#loteCorreto')
            .select('Sim')

        cy.get('#prodConservado')
            .select('Não')

        cy.get('#concCorreta')
            .select('Sim')

        cy.get('#qtdDivergente')
            .select('Não')

        cy.get('#valorDivergente')
            .select('Sim')

        cy.get('#prodControlado')
            .select('Não')

        cy.get('#prodTermolabil')
            .select('Sim')

        cy.get('#status')
            .select('Ok')

        cy.get('#nConformidade')
            .select('Sem Não Conformidades')
    })

    it('Enviar formulário', function(){
        cy.get('#btnEnviar').click()
    })

    it('Formulário enviado com sucesso', function(){
        cy.contains('Formulário enviado com sucesso!')
    })

    
  })