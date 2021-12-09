/// <reference types="Cypress" />

describe('Segundo reto', () => {
  it('probando la aplicacion', () => {
    cy.visit('https://computer-database.gatling.io/computers'); // visita una ruta
    cy.wait(500);
    cy.title().should('eq', 'Computers database');

    cy.get('#searchbox').type('ace');
    cy.get('#searchsubmit').should('be.visible').click();
    cy.wait(500);

    cy.get('#add').click();

    // form
    cy.get('#name').should('be.visible').type('computadora moderna');
    cy.get('#introduced').should('be.visible').type('2017-09-09');
    cy.get('#discontinued').should('be.visible').type('2019-09-09');

    // combo

    cy.get('#company').should('be.visible').select('Thinking Machines').should('have.value', '2');
    cy.wait(300);
    cy.get('.primary').should('be.visible').click();

    // buscar dato creado

    cy.get('#searchbox').type('computadora moderna');
    cy.wait(1000);
    cy.get('#searchsubmit').should('be.visible').click();
  });
});
