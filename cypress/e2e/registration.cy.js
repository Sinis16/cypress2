describe('Testing basic Angular registration', () => {
    beforeEach(()=>{
       cy.visit('https://www.vistronica.com/iniciar-sesion')
        cy.wait(7000)
        cy.get('no-account').click()
    })
    it('Test footer 1', () => {
        cy.get('link-product-page-prices-drop-1').click()
        cy.url().should('eq', 'https://www.vistronica.com/productos-rebajados')
    })
    it('Test footer 2', () => {
        cy.get('link-product-page-new-products-1').click()
        cy.url().should('eq', 'https://www.vistronica.com/novedades')
    })
    it('Test footer 3', () => {
        cy.get('link-product-page-best-sales-1').click()
        cy.url().should('eq', 'https://www.vistronica.com/productos-rebajados')
    })
    it('Test form invalid input', () => {
        cy.get('button.btn.btn-primary').click()
        cy.wait(1000)
        cy.get('div.invalid-feedback').then(($divs)=>{
            expect($divs.length).to.equal(4)
        })
    })
    it('Test offers button', () => {
        cy.get('material-icons checkbox-checked').click();
        cy.wait(1000)
        cy.get('material-icons checkbox-checked').should('be.checked');
    })
    it('Test suscriptions button', () => {
        cy.get('input[type="checkbox"][name="newsletter"][value="1"]').click();
        cy.wait(1000)
        cy.get('input[type="checkbox"][name="newsletter"][value="1"]').should('be.checked');
    })
    it('Test password show text button', () => {
        cy.get('input-group-btn').click();
        cy.wait(1000)
        cy.get('.form-control.js-child-focus')
      .should('have.attr', 'type', 'text');
    })
    it('Test input capabilities', () => {
        cy.get('register-form').within(() => {
            cy.get('input[name="firstname"]').type('Juan')
            cy.get('input[name="lastname"]').type('Perez')
            cy.get('input[name="email"]').type('prueba@gmail.com')
            cy.get('input[name="password"]').type('col2024')
            cy.get('button.btn.btn-primary').click()
        })
    })
  })