/// <reference types="Cypress" />
require('cypress-plugin-tab');

describe('Primer reto', () => {
  it('', () => {
    cy.visit('https://demoqa.com/webtables'); // visita una ruta
    cy.title().should('eq', 'ToolsQA');
    cy.wait(1000);
    cy.get('#searchBox').should('be.visible').type('Cierra');
    cy.wait(1000);
    cy.get('#searchBox').should('be.visible').clear(); // borra lo escrito

    // agregando campo
    cy.get('#addNewRecordButton').should('be.visible').click();
    cy.wait(1000);
    cy.get('#firstName')
      .should('be.visible')
      .type('alvaro')
      .tab()
      .type('aliaga')
      .tab()
      .type('correo@gmai.com')
      .tab()
      .type('14')
      .tab()
      .type('15000')
      .tab()
      .type('gerencia');
    cy.get('#submit').should('be.visible').click();

    cy.wait(1000);
    cy.get('#searchBox').should('be.visible').type('alvaro');

    // editar un campo
    cy.get('#edit-record-4').should('be.visible').click();
    cy.wait(1000);
    cy.get('#firstName').should('be.visible').clear().type('jose');
    cy.wait(500);
    cy.get('#submit').should('be.visible').click();
    cy.get('#searchBox').clear();
    cy.get('#searchBox').type('jose');
    cy.get('#delete-record-4').click();
  });
});
