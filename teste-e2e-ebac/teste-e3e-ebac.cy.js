/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      cy.get('.block-inner >')
      .eq(2)
      .click()
      cy.get('.button-variable-item-32')
      .click()
      cy.get('.button-variable-item-Brown')
      .click()
      cy.get('.single_add_to_cart_button')
      .click()
      cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a')
      .click()
      cy.get('.block-inner >')
      .eq(1)
      .click()
      cy.get('.button-variable-item-XS')
      .click()
      cy.get('.button-variable-item-Yellow')
      .click()
      cy.get('.single_add_to_cart_button')
      .click()
      cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a')
      .click()
      cy.get('.block-inner >')
      .eq(3)
      .click()
      cy.get('.button-variable-item-XS')
      .click()
      cy.get('.button-variable-item-Blue')
      .click()
      cy.get('.single_add_to_cart_button')
      .click()
      cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a')
      .click()
      cy.get('.block-inner >')
      .eq(6)
      .click()
      cy.get('.button-variable-item-XS')
      .click()
      cy.get('.button-variable-item-Gray')
      .click()
      cy.get('.single_add_to_cart_button')
      .click()
      cy.get('.woocommerce-message > .button')
      .click()
      cy.get('.checkout-button')
      .click()
      cy.get('#billing_first_name').type(faker.person.firstName())
      cy.get('#billing_last_name').type(faker.person.lastName())
      cy.get('#billing_address_1').type(faker.location.streetAddress())
      cy.get('#billing_city').type(faker.location.city())
      cy.get('#billing_postcode').type('14580000')
      cy.get('#billing_phone').type('12341234124')
      cy.get('#billing_email').type(faker.internet.email())
      cy.get('#terms')
      .click()
      cy.get('#place_order')
      .click()
       });


})