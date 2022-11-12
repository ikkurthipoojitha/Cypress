/// <reference types="cypress" />



it('google test',function(){

    cy.visit('https://google.com')

    cy.get('.gLFyf').type('Mocha cypress{enter}')
    
    //cy.get('.gLFy',{timeout:4000}).type('Automation Step by Step{enter}')
    //cy.get(':nth-child(7) > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').click()
   //cy.get('.eKjLze > .g > [lang="en"] > .tF2Cxc > .yuRUbf > a > .LC20lb').click()

   //cy.get('.MUFPAc > :nth-child(2) > a').click()

   cy.wait(4000)
   cy.contains('Videos').click()

})