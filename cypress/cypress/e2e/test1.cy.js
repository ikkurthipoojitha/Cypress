/// <reference types="cypress" />



it('google test',function(){

    cy.visit('https://google.com')

    cy.get('.gLFyf').type('Automation Step by Step{enter}')
    
    //cy.get('.gLFy',{timeout:4000}).type('Automation Step by Step{enter}')
    //cy.get(':nth-child(7) > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').click()
   //cy.get('.eKjLze > .g > [lang="en"] > .tF2Cxc > .yuRUbf > a > .LC20lb').click()

   //cy.get('.MUFPAc > :nth-child(2) > a').click()

   cy.wait(4000)
   cy.contains('Videos').click()

})

it.only('Orange HR test',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-topbar-body-nav-tab-link').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.oxd-button--secondary').click()
})