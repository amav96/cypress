/// <reference types="Cypress" />
require('cypress-plugin-tab');

describe('ejemplo function tab', () => {
  it('Type con tab', () => {
    cy.visit('https://demoqa.com/automation-practice-form'); // visita una ruta
    cy.title().should('eq', 'ToolsQA');

    cy.wait(8000);
    cy.get('#firstName').type('alvaro').tab().type('aliaga').tab().type('alavro@gmail.com'); // typea en cada campo y hace tab
  });
});
