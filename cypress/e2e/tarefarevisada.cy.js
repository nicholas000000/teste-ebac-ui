/// <reference types="cypress" />

describe('Fluxo de Pedido - Loja EBAC', () => {
  beforeEach(() => {
    cy.visit('/produtos/')
    cy.fixture('userData').as('user')
  })

  it('Deve realizar um pedido completo com sucesso', function () {
    // Adiciona 4 produtos usando comando customizado
    cy.addProduct(2, '32', 'Brown')
    cy.addProduct(1, 'XS', 'Yellow')
    cy.addProduct(3, 'XS', 'Blue')
    cy.addProduct(6, 'XS', 'Gray')

    // Vai para o checkout
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

    // Preenche os dados do checkout
    cy.get('#billing_first_name').type(this.user.firstName)
    cy.get('#billing_last_name').type(this.user.lastName)
    cy.get('#billing_address_1').type(this.user.address)
    cy.get('#billing_city').type(this.user.city)
    cy.get('#billing_postcode').type(this.user.postcode)
    cy.get('#billing_phone').type(this.user.phone)
    cy.get('#billing_email').type(this.user.email)

    // Finaliza o pedido
    cy.get('#terms').click()
    cy.get('#place_order').click()

    // Validação simples
    cy.contains('Obrigado. Seu pedido foi recebido.').should('be.visible')
  })
})