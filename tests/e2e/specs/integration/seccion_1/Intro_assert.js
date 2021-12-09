/// <reference types="Cypress" />

describe('practiancao assert', () => {
  it('demo de los asert', () => {
    cy.visit('https://demoqa.com/automation-practice-form'); // visita una ruta
    cy.title().should('eq', 'ToolsQA');
    cy.wait(1000);

    cy.get('#firstName').should('be.visible').type('alvaro'); // verifica que el elemento este visible
    cy.get('#lastName').should('be.visible').type('aliaga');
    cy.get('#userEmail').should('be.visible').should('be.enabled').type('cooreo@gmail.com'); // si esta visible y habilitado
  });
});
