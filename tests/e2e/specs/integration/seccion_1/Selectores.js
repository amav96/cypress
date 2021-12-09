/// <reference types="Cypress" />

require('cypress-xpath');

describe('Tipos de selectores', () => {
  it('Selector por id', () => {
    cy.visit('https://demoqa.com/text-box'); // visita una ruta
    cy.title().should('eq', 'ToolsQA');
    cy.wait(1000);
    cy.get('#userName').should('be.visible').type('Carlos');
    cy.get('#userEmail').should('be.visible').type('correo@demo.com');
  });

  it('Selector por atributo', () => {
    cy.visit('https://demoqa.com/text-box'); // visita una ruta
    cy.title().should('eq', 'ToolsQA');
    cy.wait(1000);
    cy.get("[placeholder='Full Name']").should('be.visible').type('Carlos peres');
    cy.get('#userEmail').should('be.visible').type('correo@demo.com');
  });

  it('Selector por xpath', () => {
    cy.visit('https://demoqa.com/text-box'); // visita una ruta
    cy.title().should('eq', 'ToolsQA');
    cy.wait(1000);
    cy.xpath('/html/body/div[2]/div/div/div[2]/div[2]/div[1]/form/div[1]/div[2]/input')
      .should('be.visible')
      .type('juan perez');
  });

  it.only('Selector por contains', () => {
    cy.visit('https://demoqa.com/automation-practice-form'); // visita una ruta
    cy.title().should('eq', 'ToolsQA');
    cy.wait(1000);
    cy.get('.custom-control-label').contains('Female').click();
    cy.wait(1000);
    cy.get('.custom-control-label').contains('Other').click();
  });
});
