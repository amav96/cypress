/// <reference types="Cypress" />

describe('Functiones para TYpe', () => {
  it('Type --> ENTER', () => {
    cy.visit('https://www.google.com/'); // visita una ruta
    cy.title().should('eq', 'Google');
    cy.wait(1000);

    cy.get("[name='q']").type('cypress io {enter}'); // selecionar por un name, escribe y hace enter
    cy.wait(500);
    cy.get('#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3').click();
  });
});
