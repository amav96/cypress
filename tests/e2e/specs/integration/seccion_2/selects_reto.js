/// <reference types="Cypress" />

describe('Reto de select', () => {
  it('reto', () => {
    cy.visit('http://loudev.com/'); // visita una ruta
    cy.title().should('eq', 'jQuery multiselect');
    cy.wait(1000);

    cy.get('#-1300566141-selectable').click();

    cy.wait(3000);

    cy.get('#-1300566141-selection').click();
  });
});
