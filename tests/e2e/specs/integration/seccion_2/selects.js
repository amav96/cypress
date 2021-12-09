/// <reference types="Cypress" />

describe('Select', () => {
  it('Select', () => {
    cy.visit('https://getbootstrap.com/docs/5.0/forms/select/'); // visita una ruta
    cy.title().should('eq', 'Select · Bootstrap v5.0');
    cy.wait(500);
    cy.get('body > div.container-xxl.my-md-4.bd-layout > main > div.bd-content.ps-lg-4 > div:nth-child(3) > select')
      .should('be.visible')
      .select('One')
      .should('have.value', '1');

    cy.wait(2000);

    cy.get('body > div.container-xxl.my-md-4.bd-layout > main > div.bd-content.ps-lg-4 > div:nth-child(3) > select')
      .should('be.visible')
      .select('Two')
      .should('have.value', '2');
  });

  it('Select autcomplete', () => {
    cy.visit('https://www.google.com/'); // visita una ruta
    cy.title().should('eq', 'Google');
    cy.wait(500);
    cy.get("[name='q']").should('be.visible').type('ferrari {enter}');
    cy.wait(500);
    cy.get('.MUFPAc > :nth-child(2) > a').click();
  });

  it.only('multiple select', () => {
    cy.visit('https://getbootstrap.com/docs/5.0/forms/select/'); // visita una ruta
    cy.title().should('eq', 'Select · Bootstrap v5.0');
    cy.wait(500);
    cy.get('body > div.container-xxl.my-md-4.bd-layout > main > div.bd-content.ps-lg-4 > div:nth-child(3) > select')
      .should('be.visible')
      .select('One') // multiple select => (['one','dos','tres'])
      .then(() => {
        cy.get(':nth-child(4) > .btn-clipboard').should('be.visible').click();
      });
  });
});
