/// <reference types="Cypress" />

describe('opciones de click', () => {
  it('click sencillo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.title().should('eq', 'OrangeHRM');
    cy.get('#txtUsername').should('be.visible').type('Admin');
    cy.get('#txtPassword').should('be.visible').type('admin123');
    cy.get('#btnLogin').should('be.visible').click();
    cy.wait(3000);
    cy.get('#menu_admin_viewAdminModule > b').should('be.visible').click();
  });

  it('click force true', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.title().should('eq', 'OrangeHRM');
    cy.get('#txtUsername').should('be.visible').type('Admin');
    cy.get('#txtPassword').should('be.visible').type('admin123');
    cy.get('#btnLogin').should('be.visible').click();
    cy.wait(3000);
    cy.get('#menu_admin_viewAdminModule > b').should('be.visible').click();
    cy.get('#menu_admin_UserManagement').should('be.visible').click({ force: true });
  });

  it.only('click por coordenadas (x,y)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.title().should('eq', 'OrangeHRM');
    cy.get('#txtUsername').should('be.visible').type('Admin');
    cy.get('#txtPassword').should('be.visible').type('admin123');
    cy.get('#btnLogin').should('be.visible').click();
    cy.wait(3000);
    cy.get('#menu_dashboard_index > b').should('be.visible').click(70, 5);
  });
});
