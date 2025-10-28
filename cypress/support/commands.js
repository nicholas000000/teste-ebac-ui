Cypress.Commands.add('addProduct', (index, size, color) => {
  cy.get('.block-inner >').eq(index).click()
  cy.get(`.button-variable-item-${size}`).click()
  cy.get(`.button-variable-item-${color}`).click()
  cy.get('.single_add_to_cart_button').click()
  cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
})