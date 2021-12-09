/// <reference types="Cypress" />

describe('ejemplo de type pageUp, pageDown', () => {
  it('type pageUp', () => {
    cy.visit('https://demoqa.com/text-box'); // visita una ruta
    cy.title().should('eq', 'ToolsQA');
    cy.wait(1000);
    cy.get('#userName').type('{pageup}'); // sube la pagina desde ese punto
    cy.wait(1500);
  });

  it('type pageDown', () => {
    cy.visit('https://demoqa.com/text-box'); // visita una ruta
    cy.title().should('eq', 'ToolsQA');
    cy.wait(1000);
    cy.get('#userName').type('{pagedown}'); // baja la pagina desde de punt
    cy.wait(1500);
  });
});
