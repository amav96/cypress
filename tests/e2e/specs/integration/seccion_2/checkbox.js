/// <reference types="Cypress" />

describe('Nueva seccion CHeckBox', () => {
  it('check uno', () => {
    cy.visit('https://getbootstrap.com/docs/5.0/forms/checks-radios/'); // visita una ruta
    cy.title().should('eq', 'Checks and radios · Bootstrap v5.0');
    cy.wait(500);
    cy.get('#flexCheckDefault').check().should('be.checked'); // tambien puede ser con CLICKKKKKKKKKKK!!!
    cy.wait(2000);
    cy.get('#flexCheckDefault').uncheck().should('not.be.checked');
  });

  it.only('radio buttons', () => {
    cy.visit('https://getbootstrap.com/docs/5.0/forms/checks-radios/'); // visita una ruta
    cy.title().should('eq', 'Checks and radios · Bootstrap v5.0');
    cy.wait(1000);
    cy.get('#flexRadioDefault1').click(); // tambien puede ser con CHECK!!!
  });
});
