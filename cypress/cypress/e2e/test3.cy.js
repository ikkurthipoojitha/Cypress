describe('All login tests', function () {

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')

    })

    it('Orange HR test1', function () {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin123')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
        cy.get('.oxd-button').click()
    })

    it.only('Orange HR test2', function () {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

    })
    // it.skip
    //it.only

})

it('Orange HR test3', function () {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

})
