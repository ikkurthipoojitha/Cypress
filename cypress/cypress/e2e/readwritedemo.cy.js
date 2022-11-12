/// <reference types="cypress" />


before(function(){
    cy.fixture('example.json').as('test_data')
})

it('Read Files Using Fixture',function(){
    cy.fixture('example').then((data)  =>{
        cy.log(data.name)
        cy.log(data.email)
    }) 
    cy.log(this.test_data.name)
})

it('read file using readfile function',function(){
    cy.readFile('./cypress/fixtures/example.json').then((data) =>{
        cy.log(data.name)
    })
})

it('write file demo',function(){
    cy.writeFile('Sample.txt',"this is a sample test")
    cy.writeFile('Sample.txt',"This is a sample test two",{flag:'a+'})


})