/// <reference types="Cypress" />
describe('Seccion 1 Validando el titulo', () => {
  it('test validar el titulo', () => {
    cy.visit('https://demoqa.com/text-box'); // visita una ruta
    cy.title().should('eq', 'ToolsQA'); // va al title y verifica el text
    cy.log('ok la funcion title funciono bie');
  });
});
