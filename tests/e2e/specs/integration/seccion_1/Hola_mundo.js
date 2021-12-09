describe('Bienvenido al curso de cypress seccion 1', () => {
  it('Mi primer test -> Hola mundo', () => {
    cy.log('hola mundo');
    cy.wait(3000); // segundos a esperar
  });

  it('segundo teset -> campo name', () => {
    cy.visit('https://demoqa.com/text-box'); // visita una ruta

    cy.get('#userName').type('Alvaro'); // seleciona un elemento y escribe algo
    cy.wait(2000);
  });
});
